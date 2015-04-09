'use strict';

var Backbone = require('backbone');

var Router = Backbone.Router.extend({

  routes: {
    'contacts': 'contacts',
    '*actions': 'home'
  }

});

module.exports = Router;
