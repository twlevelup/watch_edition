'use strict';

var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone');

Backbone.$ = $;

var App = function App () {},
  HomeScreen = require('./views/home.js'),
  ConcactsScreen = require('./views/contacts.js');

module.exports = App;

App.prototype.start = function () {
  // var homeView = new HomeScreen();
  var contactsScreen = new HomeScreen();
};
