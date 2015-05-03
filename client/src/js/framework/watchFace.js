'use strict';

var WatchFace = Backbone.View.extend({

  el: '#watch',

  template: require('../../templates/framework/watch.hbs'),

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
