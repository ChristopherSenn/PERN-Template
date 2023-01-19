import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

interface Props {
    redirectPath?: string,
}

export function LoginGuard(props: Props): React.ReactElement {
    const {
        redirectPath = "/login",
    } = props;

    let isLoggedIn = false;

    const userString = localStorage.getItem("user");
    isLoggedIn = Boolean(userString);

    const { pathname } = useLocation();

    if (isLoggedIn == false) {
        return <Navigate to={redirectPath} state={{ from: pathname }} replace />;
    }

    return(<Outlet />);
}
