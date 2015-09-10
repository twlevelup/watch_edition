'use strict';

var ViewWithButtons = require('./viewWithButtons');

var pageView = ViewWithButtons.extend({

  className: 'page',

  back: function() {
    history.back();
  }

});

module.exports = pageView;
