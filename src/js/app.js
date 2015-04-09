'use strict';

var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone');

Backbone.$ = $;

var App = function App () {},

HomeView = require('./views/home.js');

module.exports = App;

App.prototype.start = function () {
  var contactView = new HomeView();
};
