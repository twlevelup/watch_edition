'use strict';

module.exports = {
  options: {
    config: '.jscsrc',
    verbose: true,
    fix: true
  },
  src: [
    'Gruntfile.js',
    'grunt/*.js',
    'client/src/js/**/*.js',
    'client/spec/**/*.spec.js'
  ]
};
