import React from "react";
import { BrowserRouter } from "react-router-dom";
import { TemplateApp } from "./template-app";

export function App(): React.ReactElement {

    return (
        <BrowserRouter>
            <TemplateApp />
        </BrowserRouter>
    );
}
