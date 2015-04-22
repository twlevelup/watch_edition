'use strict';

module.exports = {
  options: {
    debug: true
  },
  vendor: {
    src: ['./src/js/vendor.js'],
    dest: 'public/js/vendor.js',
  },
  // FIXME THIS IS LAME
  testVendor: {
    src: ['./src/js/vendor.js'],
    dest: 'build/vendor.js',
  },
  test: {
    src: './spec/**/*.spec.js',
    dest: 'build/spec-bundle.js',
    options: {
      transform: ['hbsfy'],
      external: ['jquery', 'underscore', 'backbone']
    }
  },
  app: {
    src: [
      './src/js/main.js',
      './src/templates/**/*.hbs'
    ],
    dest: './public/js/main.js',
    options: {
      transform: ['hbsfy'],
      external: ['jquery', 'underscore', 'backbone']
    }
  }
};
