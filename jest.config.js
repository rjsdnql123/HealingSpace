module.exports = {
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    transform: {
      '^.+\\.(js|jsx)?$': 'babel-jest',
      '^.+\\.(ts|tsx)?$': 'ts-jest',
    },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
    },
    testMatch: [
      '<rootDir>/**/*.test.(js|jsx|ts|tsx)',
      '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))',
    ],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
  };

//   module.exports = {
//     setupFilesAfterEnv: ["<rootDir>/setupTests.js"], // or .ts for TypeScript App
//     transform: {
//         '\\.(ts|tsx)?$': 'babel-jest',
//       },
//       testMatch: ['<rootDir>/src/**/>(*.)test.{ts, tsx}'], // finds test
//       testPathIgnorePatterns: ['/node_modules/', '/public/'],
//       moduleFileExtensions: ['ts',"js", 'tsx', 'json', 'node'],

//   };