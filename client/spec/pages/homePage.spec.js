'use strict';

var HomePage = require('../../src/js/pages/homePage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Home Page', function() {
  var homePage;

  beforeEach(function () {
    global.App.router = new Router();
    setFixtures('<div id="watch-face" />');
    homePage = new HomePage();
  });

  describe('button event handlers', function () {
    beforeEach(function () {
      spyOn(homePage, 'scrollUp');
      spyOn(homePage, 'scrollDown');
      homePage.setButtonEvents();
    });

    describe('right', function () {
      beforeEach(function () {
        spyOn(global.App.router, 'navigate');
      });

      it('should take the user to the contacts page', function () {
        homePage.trigger('right');
        expect(global.App.router.navigate).toHaveBeenCalledWith('contacts', true);
      });
    });

    describe('top', function () {
     it('should scroll the watch face by 70px up', function () {
        homePage.trigger('top');
        expect(homePage.scrollUp).toHaveBeenCalled();
      });
    });

    describe('bottom', function () {
      it('should scroll the watch face by 70px down', function () {
        homePage.trigger('bottom');
        expect(homePage.scrollDown).toHaveBeenCalled();
      });
    });

  });

  describe('rendering', function () {

    it('should produce the correct HTML', function () {
      homePage.render();
      expect(homePage.el.innerHTML).toContain('<div>Hello, World!</div>');
    });

    it('returns the view object', function() {
      expect(homePage.render()).toEqual(homePage);
    });

  });

});
