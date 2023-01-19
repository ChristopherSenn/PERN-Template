import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export function LogoutButton(): React.ReactElement {
    const navigate = useNavigate();

    function onLogout() {
        localStorage.removeItem("user");
        navigate("/login");
    }

    return(
        <>
            <Button variant="contained" onClick={onLogout}>Logout</Button>
        </>
    );
}

