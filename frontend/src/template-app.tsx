import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./components/layout";
import { themeBase } from "./theme";
import { LoginView } from "./views/login";
import { LoginGuard, routes } from "./x/routing";

export function TemplateApp(): React.ReactElement {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const location = useLocation();

    React.useEffect(() => {
        const userString = localStorage.getItem("user");
        setIsLoggedIn(Boolean(userString));
    },[location]);
    
    return (
        <ThemeProvider theme={themeBase}>
            <CssBaseline />
            <Layout showNavigation={isLoggedIn}>
                <Routes>
                    <Route path="/login" element={<LoginView />} />
                    <Route element={<LoginGuard/>}>
                        {
                            routes.map((route) => {
                                return(
                                    <Route key={route.label} path={route.basePath} element={route.view} />
                                );
                            })
                        }
                        <Route path="/*" element={routes.find(route => route.defaultRoute === true)?.view} />
                    </Route>
                </Routes>
            </Layout>
        </ThemeProvider>
    );
}
