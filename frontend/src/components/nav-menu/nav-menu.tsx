import { styled } from "@mui/material";
import React from "react";
import { LogoutButton } from "../logout-button/logout-button";

const StyledNavMenu = styled("div")({
    height: 64,
});

export function NavMenu(): React.ReactElement {
    return(
        <StyledNavMenu>
            NavMenu

            <LogoutButton />
        </StyledNavMenu>
    );
}
