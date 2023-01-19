export class User {
    constructor(
        public id = "",
        public token = "",
        public email = "",
        public username = "",
        public roles: UserRoles[] = []
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    ) {}
}

export enum UserRoles {
    User = "user",
    Admin = "admin",
}
