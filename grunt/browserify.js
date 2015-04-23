'use strict';

module.exports = {
  app: {
    src: [
      './src/js/main.js',
      './src/templates/**/*.hbs'
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
