// Karma configuration
// Generated on Tue Sep 09 2014 13:58:24 GMT-0700 (PDT)
'use strict';

var browsers = ['Chrome', 'PhantomJS','Firefox'];
if ( /^win/.test(process.platform) ) {
  browsers.push('IE');
}
if ( /^darwin/.test(process.platform) ) {
  browsers.push('Safari');
}
if (process.env.TRAVIS ) {
  browsers = ['PhantomJS'];
}

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify', 'jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'test/angular/*-test.js'
    ],


    // list of files to exclude
    exclude: [
      '**/*.swp'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/angular/*-test.js': ['browserify'],
      'app/js/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],

    coverageReporter: {
      reporters: [
        { type: 'lcov', dir: 'coverage/' },
        { type: 'html', dir: 'coverage/' }
      ]
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: browsers,


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    browserify: {
      debug: true,
      transform: ['debowerify','istanbulify'],
    }
  });
};
