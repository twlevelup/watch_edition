'use strict';

module.exports = function (grunt, options) {
  return {
    options: {
            sourceMap: true
    },
    app: {
        files: {
            'public/styles/app.css': 'src/styles/app.scss'
        }
    }
  };
};
