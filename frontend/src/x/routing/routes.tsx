import React from "react";
import { TestView } from "../../views/test";
import { AppRoute } from "./app-route";

export const routes: AppRoute[] = [
    {
        label:        "Test View Label",
        basePath:     "/test",
        view:         <TestView />,
        defaultRoute: true,
    },
];
