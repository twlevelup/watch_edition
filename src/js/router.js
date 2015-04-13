'use strict';

var Backbone = require('backbone');

var HomeScreen = require('./views/home.js'),
  ConcactsScreen = require('./views/contacts.js');

var Router = Backbone.Router.extend({

  routes: {
    contacts: 'contacts',
    '*actions': 'home'
  },

  home: function() {
    this.loadView(new HomeScreen());
  },

  contacts: function() {
    this.loadView(new ConcactsScreen());
  },

  loadView: function(view) {
    if (this.view) {
      this.view.remove();
    }

    this.view = view;
  }

});

module.exports = Router;
