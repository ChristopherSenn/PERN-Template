import { User, UserRoles } from "../models/user";

export interface ResponseUser {
    id: string,
    token: string,
    email: string,
    username: string,
    roles: UserRoles[],
}

export function responseToUser(response: ResponseUser): User {
    return new User(
        response.id,
        response.token,
        response.email,
        response.username,
        response.roles
    );
}
