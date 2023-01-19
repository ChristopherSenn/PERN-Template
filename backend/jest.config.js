/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
  },
  setupFiles: [],
  setupFilesAfterEnv: [
  ],
  maxWorkers: "2",
  transform: {
    "^.+\\.(ts|tsx|js|jsx|html)$": "ts-jest",
  },
  transformIgnorePatterns: [
    "node_modules/",
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "mocks/",
  ],
  globals: {
    "ts-jest": {
      useESM: false,
      tsconfig: "tsconfig.test.json",
    },
  },
};
