module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/*.test.ts"],
    coveragePathIgnorePatterns: ["tests/utils"]
}