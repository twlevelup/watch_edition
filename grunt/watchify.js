'use strict';

module.exports = {
  options: {
    debug: true,
    callback: function(b) {
      b.transform('hbsfy');
      return b;
    },
    external: ['jquery', 'underscore', 'backbone']
  },
  vendor: {
    src: ['./src/js/vendor.js'],
    dest: 'public/js/vendor.js',
    //options: {
    //  shim: {
    //    jquery: {
    //      path: 'node_modules/jquery/src/jquery.js',
    //      exports: '$'
    //    },
    //    underscore: {
    //      path: 'node_modules/underscore/underscore.js',
    //      exports: '_'
    //    },
    //    backbone: {
    //      path: 'node_modules/backbone/backbone.js',
    //      exports: 'Backbone',
    //      depends: {
    //        underscore: 'underscore'
    //      }
    //    }
    //  }
    //}
  },
  test: {
    src: './spec/**/*.spec.js',
    dest: 'spec/spec-bundle.js'
  },
  app: {
    src: [
      './src/js/main.js',
      './src/templates/**/*.hbs'
    ],
    dest: './public/js/main.js'
  }
};
