const caps = {
  'browser': 'playwright-chromium',
  'name': 'test',
  'build': 'codecept-pw-build',
  'browserstack.username': process.env.BROWSERSTACK_USERNAME,
  'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY,
  'browserstack.playwrightVersion': '1.41.1'
};

exports.config = {
  tests: './test*.js',
  output: './output',
  helpers: {
    Playwright: {
      show: true,
      browser: 'chromium',
      chromium: {
        browserWSEndpoint: { wsEndpoint: `wss://<YOUR_HUB_URL>/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}` }
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
      mochaFile: 'output/result.xml',
      verbose: true,
    }
  },
  name: 'codeceptjs',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
