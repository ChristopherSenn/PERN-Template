import { fetchPOST, urlLogin } from "src/x/api";
import { User } from "../models/user";
import { responseToUser, ResponseUser } from "../responses/response-user";

export interface LoginParams {
    username: string,
    password: string,
}

export async function loginCall(params: LoginParams): Promise<User> {
    const url = urlLogin();
    const resp = await fetchPOST<ResponseUser>(url, params);
    const user = responseToUser(resp.data);
    return user;
}
