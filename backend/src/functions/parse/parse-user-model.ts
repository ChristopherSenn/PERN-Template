// import { IUser, UserDocument } from "../../models/user.model";
import { UserDto } from "../../models/user.model";

export function parseUser(userDocument: any): UserDto {
  return {
    id: userDocument._id,
    username: userDocument.username,
    email: userDocument.email,
    password: userDocument.password,
    enabled: userDocument.enabled,
    roles: userDocument.roles,
  };
}

export function parseUsers(userDocuments: any[]): UserDto[] {
  return userDocuments.map((userDocument) => {
    return {
      id: userDocument._id,
      username: userDocument.username,
      email: userDocument.email,
      password: userDocument.password,
      enabled: userDocument.enabled,
      roles: userDocument.roles,
    };
  });
}
