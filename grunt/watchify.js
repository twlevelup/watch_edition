'use strict';

module.exports = {
  options: {
    debug: true,
    callback: function(b) {
      b.transform('hbsfy');
      return b;
    }
  },
  vendor: {
    src: ['./src/js/vendor.js'],
    dest: 'public/js/vendor.js',
  },
  test: {
    src: './spec/**/*.spec.js',
    dest: 'spec/spec-bundle.js',
    options: {
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
      external: ['jquery', 'underscore', 'backbone']
    }
  }
};
