'use strict';

module.exports = function (grunt, options) {
  return {
    options: {
      jshintrc: true,
      reporter: require('jshint-stylish'),
    },
    all: [
      'Gruntfile.js',
      'grunt/*.js',
      'src/js/**/*.js'
    ]
  };
};
