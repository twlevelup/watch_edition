'use strict';

var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone');

var Watch = Backbone.View.extend({

  el: '#watch',

  initialize: function() {
    _.bindAll(this, 'render');

    this.render();
  },

  template: require('../../templates/views/watch.hbs'),

  render: function() {

		this.$el.append(this.template());

  }

});

module.exports = Watch;
