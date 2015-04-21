'use strict';

var HomePage = require('../../src/js/views/homePage'),
  Router = require('../../src/js/router.js'),
  $ = require('jQuery');

global.router = new Router();

describe('The Contacts Page', function() {

  var homePage, router;

  beforeEach(function () {
    router = new Router();
    homePage = new HomePage();
  });

  describe('button events', function () {

    describe('button-right', function () {

      beforeEach(function () {
        spyOn(global.router, 'navigate');
      });

      it('should take you to the contacts page', function () {

        var buttonRightAction = homePage.buttonEvents['button-right'];
        homePage[buttonRightAction]();

        expect(global.router.navigate).toHaveBeenCalledWith('contacts', true);
      });

    });

  });

});
