export type UserDto = {
  username: string;
  email: string;
  password: string;
  enabled: boolean;
  roles: Array<"user" | "guest" | "admin">;
  id?: string;
  token?: string;
};
