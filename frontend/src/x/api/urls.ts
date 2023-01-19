export const URLS = {
    Users: "api/backend/users",
};

export function urlLogin(): string {
    const path = [
        URLS.Users,
        "login"
    ];
    const url = newURL(path);

    return url.toString();
}

function newURL(path:string[]): URL{
    const pathString = path.join("/");
    const base = window.location.origin;
    const url = new URL(pathString, base);

    return url;
}
