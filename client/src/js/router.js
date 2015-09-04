'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  CocktailsPage = require('./pages/cocktailsPage'),

  homePage = new HomePage(),
  cocktailsPage = new CocktailsPage(),
  contactsPage = new ContactsPage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts',
    cocktails: 'cocktails'
  },

  home: function() {
    this.renderView(homePage);
  },

  contacts: function() {
    this.renderView(contactsPage);
  },

  cocktails: function() {
    this.renderView(cocktailsPage);
  }


});

module.exports = AppRouter;
