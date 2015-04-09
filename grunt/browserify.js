'use strict';

module.exports = function (grunt, options) {
  return {
    js: {
      src: ['src/js/main.js', 'src/templates/*.hbs'],
      dest: 'public/js/main.js',
      options: {
        transform: ['hbsfy']
      }
    }
  };
};
