import { describe, it, expect } from "@jest/globals";
import { responseToUser, ResponseUser } from "./response-user";
import { User, UserRoles } from "../models/user";

describe("responseToUser", () => {

    it("correcly converts response to User", () => {
        const response = createResponse(
        );

        const expectedResult = createExpectedResult(
        );

        const result = responseToUser(response);
        expect(result).toEqual(expectedResult);
    });

});

function createResponse(roles?: UserRoles[]): ResponseUser {
    return {
        id:       "id",
        token:    "token",
        email:    "email",
        username: "username",
        roles:    roles? roles : [],
    };
}

function createExpectedResult(roles?: UserRoles[]): User {
    return new User(
        "id",
        "token",
        "email",
        "username",
        roles? roles : [],
    );
}
