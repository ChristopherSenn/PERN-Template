import { UserCreationParams, UserLoginParams } from "../services/user.service";
import { UserDto } from "../models/user.model";

export interface UserAPI {

    getUsers(): Promise<UserDto[]>;

    getUser(userId: string): Promise<UserDto>;

    register(params: UserCreationParams): Promise<UserDto>

    login(params: UserLoginParams): Promise<UserDto>

}
