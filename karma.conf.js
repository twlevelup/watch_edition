const webpackConfig = require('./webpack.test-config.js');

module.exports = (config) => {
  config.set({

    basePath: '',
    webpack: webpackConfig,
    // frameworks to use
    frameworks: ['jasmine-jquery', 'jasmine'],

    // list of files / patterns to load in the browser
    files: ['client/spec/**/*spec.js'],

    // list of files to exclude
    exclude: [],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['spec', 'coverage', 'threshold'],
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {
          type: 'text',
          subdir: '.',
          file: 'coverageResult.txt',
          watermarks: {
            statements: [60, 90],
            functions: [60, 90],
            branches: [60, 80],
            lines: [60, 90],
          },
        },
        { type: 'html', subdir: 'report-html' },
      ],
      // comment this out if you want to see the output in the console
    },

    // the configure thresholds
    thresholdReporter: {
      statements: 80,
      branches: 70,
      functions: 80,
      lines: 80,
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values:
    // - config.LOG_DISABLE
    // - config.LOG_ERROR
    // - config.LOG_WARN
    // - config.LOG_INFO
    // - config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,


    preprocessors: {
      'client/spec/**/*spec.js': ['webpack', 'sourcemap'],
      'client/src/js/main.js': ['webpack', 'sourcemap'],
      'client/src/js/**/*.js': ['coverage'],
    },

    webpackMiddleware: {
      noInfo: true,
    },

  });
};
