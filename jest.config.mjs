import nextJest from "next/jest.js";

const createJestConfig = nextJest({ dir: "./" });

/**
 * @type {import('jest').Config}
 */
const jestConfig = {
  coverageProvider: "v8",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/__tests__/util/*"],
};

export default createJestConfig(jestConfig);
