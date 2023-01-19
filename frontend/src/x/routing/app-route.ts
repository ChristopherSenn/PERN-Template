import React from "react";

export interface AppRoute {
    label: string
    basePath: string
    icon?: React.ReactElement
    view: React.ReactElement
    defaultRoute?: boolean
}
