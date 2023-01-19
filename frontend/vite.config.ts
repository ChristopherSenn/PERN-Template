import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

export default ({mode}) => {
    const serverPort = 3001;

    return defineConfig({
        plugins: [
            react(),
            svgr({
                exportAsDefault: true,
            }),
        ],
        resolve: {
            alias: {
                "src":         path.resolve(__dirname, "./src"),
                "@src":        path.resolve(__dirname, "./src"),
                "x":           path.resolve(__dirname, "./src/x"),
                "@x":          path.resolve(__dirname, "./src/x"),
                "components":  path.resolve(__dirname, "./src/components"),
                "@components": path.resolve(__dirname, "./src/components"),
                "views":       path.resolve(__dirname, "./src/views"),
                "@views":      path.resolve(__dirname, "./src/views"),
            }
        },
        server: {
            host:       "0.0.0.0",
            port:       serverPort,
            strictPort: true,
        },
    });
};
