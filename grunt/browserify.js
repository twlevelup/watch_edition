'use strict';

module.exports = {
  app: {
    src: [
      './client/src/js/main.js',
      './client/src/templates/**/*.hbs'
    ],
    dest: './public/js/main.js',
    options: {
      browserifyOptions: {
        debug: true
      },
      transform: ['hbsfy']
    }
  },
  vendor: {
    src: [
      './client/src/js/vendor.js'
    ],
    dest: './public/js/vendor.js'
  }
};
