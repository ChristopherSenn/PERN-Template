import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { NavMenu } from "./nav-menu/nav-menu";

const StyledRoot = styled("div") ({
    width:  "100%",
    height: "100%",
    margin: 0,
});


const StyledPaper = styled(Paper)(({ theme }) => ({
    display:       "flex",
    flexDirection: "column",
    overflowY:     "scroll",
    overflowX:     "hidden",
    padding:       theme.spacing(2),
}));

interface Props {
    showNavigation: boolean,
    children: React.ReactNode
}

export function Layout(props: Props): React.ReactElement {

    const {
        showNavigation,
        children
    } = props;

    return(
        <StyledRoot>
            { showNavigation && <NavMenu /> }
            <StyledPaper>
                {children}
            </StyledPaper>
        </StyledRoot>
    );
}

