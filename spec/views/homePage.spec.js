'use strict';

var HomePage = require('../../src/js/views/homePage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Home Page', function() {

  var homePage;

  beforeEach(function () {
    homePage = new HomePage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      homePage.setButtonEvents();
    });

    describe('right', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the contacts page', function () {

        homePage.trigger('right');

        // homePage.goToContacts();
        expect(global.App.navigate).toHaveBeenCalled();
      });

    });

  });

});
