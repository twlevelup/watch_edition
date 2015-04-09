'use strict';

var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone');

Backbone.$ = $;

var App = function App () {},
  Router = require('./router'),
  HomeScreen = require('./views/home.js'),
  ConcactsScreen = require('./views/contacts.js');

module.exports = App;

App.prototype.router = new Router();

App.prototype.start = function () {

  this.router.on('route:home', function (page) {
    var homeScreen = new HomeScreen();
  });

  this.router.on('route:contacts', function (page) {
    var contactsScreen = new ConcactsScreen();
  });

  Backbone.history.start();

};
