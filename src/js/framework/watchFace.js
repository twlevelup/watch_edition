'use strict';

var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone');

Backbone.$ = $;

var WatchFace = Backbone.View.extend({

  el: '#watch',

  template: require('../../templates/views/watch.hbs'),

  initialize: function() {
    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {
    this.$el.append(this.template());
    return this;
  }

});

module.exports = WatchFace;
