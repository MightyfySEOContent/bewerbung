module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["./test/.bin/jest.setup.js"],
    moduleNameMapper: {
        "^.+\\.(css|sass|scss)$": "identity-obj-proxy",
        "^@pages(.*)$": "<rootDir>/src/pages$1",
        "^@styles(.*)$": "<rootDir>/src/styles$1",
    },
    collectCoverageFrom: [
        "src/**/*.{js,jsx}",
        "!**/node_modules/**",
        "!src/pages/_app.js",
    ],
    coverageReporters: ["json", "html", "text"]
};