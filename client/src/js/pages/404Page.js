'use strict';

var Page = require('../framework/page');

var FourOhFour = Page.extend({

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

module.exports = new FourOhFour();
