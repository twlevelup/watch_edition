'use strict';

var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone');

Backbone.$ = $;

var App = function App () {},
  Router = require('./router');

module.exports = App;

App.prototype.router = new Router();

App.prototype.start = function () {

  Backbone.history.start();

};
