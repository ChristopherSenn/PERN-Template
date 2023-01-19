import { Body, Security, Controller, Get, Path, Post, Route, SuccessResponse, Tags, Example, Response } from "tsoa";
import { user } from "../db/";
import { IError } from "../models/status.model";
import { UserCreationParams, UserLoginParams } from "../services/user.service";
import { UserDto } from "../models/user.model";

@Route("users")
@Tags("Users")
export class UserController extends Controller {
  @Get("test")
  public async test(): Promise<string> {
    return "Hello from Backend";
  }


  @Security("jwt")
  @Get("{userId}")
  @Example<UserDto>({
    id: "msa90jalkjm390ßasj3apok4",
    username: "John Doe",
    email: "example@mail.com",
    password: "hashed password",
    enabled: true,
    roles: ["user"],
  })
  @Response<IError>(401, "Unauthorized", {
    message: "No token provided",
  })
  @Response<IError>(404, "Not found", {
    message: "User not found",
  })
  public async getUser(@Path() userId: string): Promise<UserDto> {
    const response = await user.getUser(userId);
    return response;
  }

  @Security("jwt", ["admin"])
  @Get()
  @Example<UserDto>({
    id: "msa90jalkjm390ßasj3apok4",
    username: "John Doe",
    email: "example@mail.com",
    password: "hashed password",
    enabled: true,
    roles: ["user"],
  })
  @Response<IError>(401, "Unauthorized", {
    message: "No token provided",
  })
  public async getUsers(): Promise<UserDto[]> {
    const response = await user.getUsers();
    return response;
  }

  @Post("register")
  @SuccessResponse("201", "Created")
  @Example<UserDto>({
    id: "msa90jalkjm390ßasj3apok4",
    username: "John Doe",
    email: "example@mail.com",
    password: "hashed password",
    enabled: true,
    roles: ["guest", "user"],
    token: "JWT Token",
  })
  @Response<IError>(401, "Unauthorized")
  @Response<IError>(400, "Validation Error")
  public async register(@Body() requestBody: UserCreationParams): Promise<UserDto> {
    const registredUser: UserDto = await user.register(requestBody);

    this.setStatus(201);
    return registredUser;
  }

  @Post("login")
  @SuccessResponse("200", "Success")
  @Example<UserDto>({
    id: "msa90jalkjm390ßasj3apok4",
    username: "John Doe",
    email: "example@mail.com",
    password: "hashed password",
    enabled: true,
    roles: ["user"],
    token: "JWT Token",
  })
  @Response<IError>(401, "Unauthorized", {
    message: "Wrong username or password...",
  })
  public async login(@Body() requestBody: UserLoginParams): Promise<UserDto> {
    const response: UserDto = await user.login(requestBody);
    this.setStatus(200);
    return response;
  }
}
