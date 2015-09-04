'use strict';

var PageView = require('../framework/page');

var CocktailsCollection = require('../collections/cocktails'),
  CocktailsView = require('../views/cocktail');

var CocktailsView = PageView.extend({

  id: 'cocktails',

  template: require('../../templates/pages/cocktails.hbs'),

  initialize: function() {
    var self = this;

    this.cocktailsCollection = new CocktailsCollection();
    this.listenTo(this.cocktailsCollection, 'change', this.render);

    self.seedCocktails();
  },

  seedCocktails: function() {
    this.cocktailsCollection.push([
      {name: 'Long Island Iced Tea'}
    ]);
  }

});

module.exports = CocktailsView;
