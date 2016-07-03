'use strict';

var Page = require('watch_framework').Page;

var fourOhFour = Page.extend({

  id: 'contacts',

  template: require('../../templates/pages/404.hbs'),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = fourOhFour;
