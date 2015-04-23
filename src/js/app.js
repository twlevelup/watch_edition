'use strict';

var $ = require('jquery'),
   Backbone = require('backbone');

Backbone.$ = $;

var Router = require('./router'),
  Watch = require('./framework/watch');

var App = function() {};

App.prototype.start = function() {

  App.router = new Router();

  App.watch = new Watch();

  Backbone.history.start();

  // FIXME Make a view for the watch and make these regular view events
  // Don't trigger them on the router
  $('#button-right').on('click', function() {
    App.router.currentView.trigger('right');
  });

  $('#button-top').click(function() {
    App.router.currentView.trigger('top');
  });

  $('#button-bottom').click(function() {
    App.router.currentView.trigger('bottom');
  });

  $('#button-left').click(function() {
    App.router.currentView.trigger('left');
  });

  $('#button-face').click(function() {
    App.router.currentView.trigger('face');
  });

};

global.App = App;

module.exports = App;
