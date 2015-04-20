'use strict';

var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone');

var pageView = Backbone.View.extend({

  className: 'page',

  setButtonEvents: function() {
    _.each(this.buttonEvents, function(eventHandler, buttonID) {
      $('body').on('click', '#' + buttonID, this[eventHandler]);
    }, this);
  },

  // TODO simplify this
  removeButtonEvents: function() {
    $('body').off('click', '#button-right')
      .off('click', '#button-left')
      .off('click', '#button-bottom')
      .off('click', '#button-top')
      .off('click', '#watch-face');
  },

  back: function() {
    history.back();
  }

});

module.exports = pageView;
