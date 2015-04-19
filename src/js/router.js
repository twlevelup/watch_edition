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
      this.currentView.removeButtonEvents();
      this.currentView.remove();
  },

  _loadNewView: function (view) {
    this.currentView = view;
    $('#watch-face').html(this.currentView.render().el);
    this.currentView.setButtonEvents();
  },

  changeView: function(view) {
    if (this.currentView) {
      this._removeOldView();
    }
    this._loadNewView(view);
  }

});

module.exports = Router;
