'use strict';

var ViewWithButtons = require('./viewWithButtons');

var pageView = ViewWithButtons.extend({

  className: 'page',

  // NOTE this can be overwritten quite easily...
  initialize: function(options) {
    this.options = options;
  },

  back: function() {
    history.back();
  }

});

module.exports = pageView;
