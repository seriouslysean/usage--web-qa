const os = require('os');

module.exports = {
    hostname: os.hostname(),
    baseUrl: 'http://127.0.0.1:5173',
    // Passed manually in the `test:testcafe*` scripts
    // browsers: 'firefox',
    screenshots: {
        takeOnFails: false,
    },
    disablePageCaching: true,
    skipJsErrors: true,
    skipUncaughtErrors: true,
}
