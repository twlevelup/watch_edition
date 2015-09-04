'use strict';

var CocktailsPage = require('../../src/js/pages/cocktailsPage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Cocktails Page', function() {
  var cocktailsPage;

  beforeEach(function() {
    cocktailsPage = new CocktailsPage();
  });

  describe('cocktails data', function() {

    it('should have a cocktails collection', function() {
      expect(cocktailsPage.cocktailsCollection).toBeDefined();
    });

  });

});
