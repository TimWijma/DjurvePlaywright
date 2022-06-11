const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  retries: 1,
  workers: 1,
  timeout: 20000,
  use: {
    video: 'on-first-retry',
    trace: 'on',
    ignoreHTTPSErrors: true,
  },
  reporter: [
    ['html', {open: 'always'}]
  ],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
};

module.exports = config;