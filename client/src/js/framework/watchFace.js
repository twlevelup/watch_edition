'use strict';

var eventHub = require('./eventHub');

var WatchFace = Backbone.View.extend({

  el: '#watch',

  template: require('../../templates/framework/watchFace.hbs'),

  events: {
    'click .power': 'clickWatchButton',
    'click .screen': 'clickWatchButton'
  },

  clickWatchButton: function (e) {
    var id = $(e.currentTarget).attr('id');
    id = _.last(id.split('-'));
    eventHub.trigger(id);
  },

  initialize: function() {
    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = WatchFace;
