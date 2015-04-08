'use strict';

var _ = require('underscore'),
  $ = require('jquery'),
  Backbone = require('backbone');

var ContactModel = require('./models/contact'),
  ContactsCollection = require('./collections/contacts');

var App = function App () {};

module.exports = App;

App.prototype.start = function () {
  var contacts = new ContactsCollection();
};
