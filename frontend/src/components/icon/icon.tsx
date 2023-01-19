import { styled, SvgIcon } from "@mui/material";
import React from "react";
import { IconKeys, icons } from "./icons";

interface IconProps {
    size?: number,
    fill?: string,
    stroke?: string,
    strokeWidth?: number,
}

const StyledIcon = styled("div")<IconProps>(({size, fill, stroke, strokeWidth}) => ({
    fontSize:       size ? size : 25,
    color:          fill,
    stroke:         stroke,
    strokeWidth:    strokeWidth,
    display:        "flex",
    justifyContent: "space-between",
}));

export interface Props {
    icon: IconKeys,
    size?: number,
    fill?: string,
    stroke?: string,
    strokeWidth?: number
}

export function Icon(props: Props): React.ReactElement {
    const transparent = "#ffffff00";

    const {
        icon,
        size,
        fill,
        stroke,
        strokeWidth
    } = props;

    const IconComponent = icons[icon];

    return(
        <StyledIcon
            size={size}
            fill={fill === "none" ? transparent : fill}
            stroke={stroke === "none" ? transparent: fill}
            strokeWidth={strokeWidth}>
            <SvgIcon fontSize="inherit">
                <IconComponent />
            </SvgIcon>
        </StyledIcon>
    );
}
