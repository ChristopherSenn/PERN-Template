import { describe, it, expect } from "@jest/globals";

import { User, UserRoles } from "./user";

describe("User", () => {

    it("constructor works", () => {
        const user = new User(
            "014105710571051",
            "jwt-token",
            "mail@mail.com",
            "username",
            [UserRoles.User]
        ); 

        expect(user).toBeTruthy();
        expect(user.email).toEqual("mail@mail.com");
        expect(user.id).toEqual("014105710571051");
        expect(user.token).toEqual("jwt-token");
        expect(user.username).toEqual("username");
        expect(user.roles.length).toEqual(1);
        expect(user.roles[0]).toEqual("user");
    });

    it("constructor with default values works", () => {
        const user = new User(); 

        expect(user).toBeTruthy();
    });
  
});
