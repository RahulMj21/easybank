import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import BaseLayout from "@/components/layout/BaseLayout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BaseLayout>
                <Component {...pageProps} />
            </BaseLayout>
        </ThemeProvider>
    );
}

export default MyApp;
