'use strict';

var $ = require('jquery')(window),
    Backbone = require('backbone');

Backbone.$ = $;

var Router = require('./router'),
  Watch = require('./framework/watch');

global.router = new Router();

var watch = new Watch();

Backbone.history.start();
