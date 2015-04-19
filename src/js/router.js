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
    this.changeView(new HomeScreen());
  },

  contacts: function() {
    this.changeView(new ContactsScreen());
  },

  _removeOldView: function () {
    if (this.view) {
      this.view.removeButtonEvents();
      this.view.remove();
    }
  },

  _loadNewView: function (view) {
    this.view = view;
    $('#watch-face').html(this.view.render().el);
    this.view.setButtonEvents();
  },

  changeView: function(view) {
    this._removeOldView();
    this._loadNewView(view);
  }

});

module.exports = Router;
