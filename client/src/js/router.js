'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts'
  },

  home: function() {
    this.renderView(homePage);
  },

  contacts: function() {
    this.renderView(contactsPage);
  }

});

module.exports = AppRouter;
