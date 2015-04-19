'use strict';

var Backbone = require('backbone'),
  $ = require('jquery');

var HomeScreen = require('./views/homePage.js'),
  ContactsScreen = require('./views/contactsPage.js');

var Router = Backbone.Router.extend({

  routes: {
    contacts: 'contacts',
    '*actions': 'home'
  },

  home: function() {
    this.changeView(HomeScreen);
  },

  contacts: function() {
    this.changeView(ContactsScreen);
  },

  changeView: function(View) {
    if (this.view) {
      this.view.removeButtonEvents();
      this.view.remove();
    }
    this.view = new View();
    $('#watch-face').html(this.view.render().el);
    this.view.setButtonEvents();
  }

});

module.exports = Router;
