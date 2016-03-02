'use strict';
// TODO separate targets
module.exports = {
  options: {
    jshintrc: true,
    reporter: require('jshint-stylish')
  },
  all: [
    'Gruntfile.js',
    'grunt/*.js',
    'client/src/js/**/*.js',
    'client/spec/**/*.spec.js'
  ]
};
