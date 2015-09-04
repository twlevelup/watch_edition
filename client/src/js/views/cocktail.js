'use strict';

var CocktailView = Backbone.View.extend({

  tagName: 'li',

  template: require('../../templates/views/cocktail.hbs'),

  initialize: function() {
    _.bindAll(this, 'render');
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});

module.exports = CocktailView;
