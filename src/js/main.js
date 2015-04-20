'use strict';

var $ = require('jquery')(window),
    Backbone = require('backbone');

Backbone.$ = $;

var Router = require('./router');
global.router = new Router();

var Watch = require('./framework/watch'),
  watch = new Watch();

  Backbone.history.start();
