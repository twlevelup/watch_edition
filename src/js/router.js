'use strict';

var Backbone = require('backbone'),
  $ = require('jquery');

Backbone.$ = $;

var HomePage = require('./views/homePage.js'),
  ContactsPage = require('./views/contactsPage.js'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage();

var Router = Backbone.Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts'
  },

  home: function() {
    this.changeView(homePage);
  },

  contacts: function() {
    this.changeView(contactsPage);
  },

  _removeOldView: function() {
    this.currentView.removeButtonEvents();
    this.currentView.remove();
  },

  _loadNewView: function(view) {
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
