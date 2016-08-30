'use strict';

var teamPage = Backbone.View.extend({

  id: 'team',

  template: require('../../templates/pages/team.hbs'),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = teamPage;
