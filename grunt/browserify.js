'use strict';

module.exports = {
  app: {
    src: [
      './src/js/main.js',
      './src/templates/**/*.hbs'
    ],
    dest: './public/js/main.js',
    options: {
      debug: true,
      transform: ['hbsfy']
    }
  }
};
