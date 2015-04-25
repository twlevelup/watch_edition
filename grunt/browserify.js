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
  }
};
