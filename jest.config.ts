/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
export default {
  roots: [
    "<rootDir>/src"
  ],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/main/**",
    "!<rootDir>/src/**/*-protocols.ts",
    "!**/protocols/**",
    "!**/test/**"
  ],
  testEnvironment: "node",
  transform: {
    '.*\\.ts$': 'ts-jest'
  }
};
