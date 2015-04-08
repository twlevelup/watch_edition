'use strict';

module.exports = function (grunt, options) {
  return {
    js: {
      src: ['src/js/app.js', 'src/templates/*.hbs'],
      dest: 'public/js/app.js',
      options: {
        transform: ['hbsfy']
      }
    }
  };
};
