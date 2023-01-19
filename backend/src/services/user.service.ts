import { Pool, QueryResult } from "pg";
import bcryptjs from "bcryptjs";

import { StatusError } from "../models/status.model";
import signJWT from "../functions/signJWT";
import { UserDto } from "../models/user.model";
import { insert, selectAll, selectAllByField } from "../db/queries";


export type UserCreationParams = Pick<UserDto, "email" | "username" | "password">;
export type UserLoginParams = Pick<UserDto, "username" | "password">;

export class UserService {
  pool: Pool; // connection pool

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async getUsers(): Promise<UserDto[]> {
    const queryString = selectAll("users");
    const res = await this.pool.query(queryString);

    return this.mapUserResult(res);
  }

  async getUser(userId: string): Promise<UserDto> {
    const queryString = selectAllByField(userId, "id", "users");
    const res = await this.pool.query(queryString);

    if (res.rows.length !== 0) {
      // parse UserDocument to IUser if found
      return this.mapUserResult(res)[0];
    } else {
      // If user not found reject promise with an error
      return Promise.reject(new StatusError("User not found", 404));
    }
  }

  async register(userCreationParams: UserCreationParams): Promise<UserDto> {
    const { email, username, password } = userCreationParams; // Store params from body in easier to access variables
    // If the provided password is to short, throw an error
    if (!password || password.length < 8) {
      throw new StatusError("Password must be at least 8 digits long!", 401);
    }

    return new Promise<UserDto>((resolve, reject) => {
      // Hash the password to not store it in the db in plain text
      bcryptjs.hash(password, 10, async (hashError: Error, hash: string) => {
        // If some error occurrs here, return a 500
        if (hashError) {
          reject(new StatusError("Internal server error!", 500, hashError.stack));
        }
        const queryString = insert("users", ["username", "email", "password", "enabled", "roles"]);
        const vars: any[] = [username, email, hash, true, ["user"]];

        await this.pool.query(queryString, vars, (err, res) => {
          if (err) {
            reject(new StatusError("Username taken", 400));
          } else {
            const newUser = this.mapUserResult(res)[0];

            signJWT(newUser, (_error: Error | null, token: string | null) => {
              // If an error occurrs, return it
              if (_error) {
                reject(new StatusError("Unauthorized", 401, _error.stack));
              } else if (token) {
                // Else resolve the Promise with the new user and the JWT Token
                resolve({
                  id: newUser.id,
                  token,
                  username: newUser.username,
                  password: newUser.password,
                  email: newUser.email,
                  enabled: newUser.enabled,
                  roles: newUser.roles,
                });
              }
            });
          }
        });
      });
    });
  }

  public async login(UserLoginParams: UserLoginParams): Promise<UserDto> {
    const { username, password } = UserLoginParams; // Store params from body in easier to access variables
    if (!password) return Promise.reject(new StatusError("No password provided!", 404));

    // Try to find the user in db by their username
    const queryString = selectAllByField(username, "username", "users");
    const res = await this.pool.query(queryString);
    const users = this.mapUserResult(res);

    if (users.length !== 1) {
      throw new StatusError("Wrong username or password..", 401);
    }

    return new Promise<UserDto>((resolve, reject) => {
      // Compare the provided password to the hashed password from the database
      bcryptjs.compare(password, users[0].password, (error: Error, result: boolean) => {
        if (error) {
          // If some kind of error occurrs here, return a 500
          reject(new StatusError("Internal server error!", 500, error.stack));
        } else if (result) {
          // If result is true (the passwords match), sign a JWT Token for the user
          signJWT(users[0], (_error: Error | null, token: string | null) => {
            if (_error) {
              // If something goes wrong here return an error
              reject(new StatusError("Unauthorized", 401, _error.stack));
            } else if (token) {
              // Else resolve the promise and return the loggen in user including the JWT token
              resolve({
                id: users[0].id,
                token,
                username: users[0].username,
                email: users[0].email,
                password: users[0].password,
                enabled: users[0].enabled,
                roles: users[0].roles,
              });
            }
          });
        } else {
          // If the passwords don't match send a correspoinding message
          reject(new StatusError("Wrong username or password..", 401));
        }
      });
    });
  }


  private mapUserResult(res: QueryResult): UserDto[] {
    return res.rows.map((r) => ({
      id: r.id,
      email: r.email,
      username: r.username,
      password: r.password,
      enabled: r.enabled,
      roles: r.roles,
    }));
  }
}
