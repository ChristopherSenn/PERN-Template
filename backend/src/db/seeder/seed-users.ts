import { user } from "../";
import { UserCreationParams } from "src/services/user.service";

export async function seedUsers() {
  const existingUsers = await user.getUsers();
  if (existingUsers.length !== 0) return;

  console.log("Seeding Users...");
  const dummyUsers = generateUsers(10);
  dummyUsers.forEach((dummyUser) => user.register(dummyUser));

  user.register({
    email: "admin@admin.com",
    username: "username",
    password: "12345678",
  });
}

function generateUserCreationParams(email: string, username: string, password: string): UserCreationParams {
  return {
    email,
    username,
    password,
  };
}

function generateUsers(amount: number): UserCreationParams[] {
  const users: UserCreationParams[] = [];

  for (let i = 0; i < amount; i++) {
    users.push(generateUserCreationParams(`user${i}@mail.com`, `user${i}`, "12345678"));
  }
  return users;
}
