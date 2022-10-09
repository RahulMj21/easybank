import { createTheme, ThemeOptions } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
    palette: {
        background: {
            default: "#00040F",
        },
        primary: {
            light: "#00F6FF",
            main: "#33BBCF",
            contrastText: "#fff",
        },
        secondary: {
            main: "#202020",
            dark: "#11101D",
        },
        skyblue: {
            light: "#DEF9FA",
            main: "#33BBCF",
        },
        textColor: {
            gray: "#9a9a9a",
            main: "#fff",
        },
    },
    typography: {
        body1: {
            color: "#9a9a9a",
            span: {
                color: "#fff",
            },
        },
    },
} as ThemeOptions);

export default theme;
