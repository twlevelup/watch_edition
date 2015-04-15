'use strict';

var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone');

Backbone.$ = $;

var Watch = function Watch() {},
  Router = require('./router'),
  WatchView = require('./views/watch');

Watch.prototype.router = new Router();

Watch.prototype.watchFace = new WatchView();

Watch.prototype.start = function() {

  Backbone.history.start();

};

module.exports = Watch;
