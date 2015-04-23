'use strict';

var Backbone = require('backbone'),
 $ = require('jquery');

Backbone.$ = $;

var HomePage = require('./views/homePage'),
  ContactsPage = require('./views/contactsPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage();

var Router = Backbone.Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts'
  },

  home: function() {
    this.renderView(homePage);
  },

  contacts: function() {
    this.renderView(contactsPage);
  },

  _loadNewView: function(view) {
    this.currentView = view;
    $('#watch-face').html(this.currentView.render().el);
    this.currentView.setButtonEvents();
  },

  renderView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }

    this._loadNewView(view);
  }

});

module.exports = Router;
