import { createTheme } from "@mui/material";
import * as fonts from "./fonts";
import * as colors from "./colors";
import * as dimens from "./dimens";
import { ExtendedTypographyOptions } from "./overrides/typography-override";

export const themeBase = createTheme({
    typography: {
        h1: {
            color:      colors.theme.primary,
            fontFamily: `"${fonts.RobotoBlack}"`,
            fontSize:   dimens.fontSize.headlineBig,
        },
        h2: {
            color:      colors.theme.primary,
            fontFamily: `"${fonts.RobotoBold}"`,
            fontSize:   dimens.fontSize.headlineMedium,
        },
        body1: {
            color:      colors.text.primary,
            fontFamily: `"${fonts.robotoRegular}"`,
            fontSize:   dimens.fontSize.textDefault,
        }
    } as ExtendedTypographyOptions,
    palette: {
        primary: {
            main: colors.theme.primary
        },
        text: {
            primary:   colors.text.primary,
            secondary: colors.text.secondary
        },
        custom: {
            backgroundGrey: colors.background.main
        },
        contrastThreshold: 3,
        tonalOffset:       0.2
    },
    spacing: dimens.spacing,
    shape:   {
        borderRadius: 4
    }
});
