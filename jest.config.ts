module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/', '/.serverless/'],
    testMatch: ['**/tests/**/*.spec.ts', '**/?(*.)+(spec|test).ts'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    }
};
