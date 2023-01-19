const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset:           "ts-jest",
    testEnvironment:  "jest-environment-jsdom",
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "<rootDir>/test/style-mock.js",
        ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),
    },
    setupFiles:         [],
    setupFilesAfterEnv: [
        "./test/setup.ts"
    ],
    maxWorkers: "2",
    transform:  {
        "^.+\\import-meta-env.js$":    "<rootDir>/scripts/import-meta-replacer.js",
        "^.+\\.(ts|tsx|js|jsx|html)$": "ts-jest",
        ".+\\.svg$":                   "<rootDir>/scripts/svg-replacer.js"
    },
    transformIgnorePatterns: [
        "node_modules/"
    ],
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "mocks/"
    ],
    globals: {
        "ts-jest": {
            useESM:   false,
            tsconfig: "tsconfig.test.json"
        },
    },
};
