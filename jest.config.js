module.exports = {
    testEnvironment: "jsdom",
  
    clearMocks: true,
  
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  
    testMatch: [
      '**/tests/**/*.test.js'
    ],
  
    // Handle CSS imports
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
  };
  