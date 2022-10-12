// https://playwright.dev/docs/test-configuration
const config = {
    testDir: 'e2e',
    use: {
        baseURL: 'http://localhost:5173',
        browserName: 'firefox',
        headless: process.env.QAU_HEADLESS === 'true',
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'off',
    },
};

module.exports = config;
