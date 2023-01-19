import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        customTypo: true;
    }
}

export interface ExtendedTypographyOptions extends TypographyOptions {
    customTypo: React.CSSProperties
}
