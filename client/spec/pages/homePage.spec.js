'use strict';

var HomePage = require('../../src/js/pages/homePage'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework/src/eventHub'),
  page;

window.App = App;

describe('The Home Page', function() {

  beforeEach(function() {
    page = new HomePage();
  });

  describe('button event handlers', function() {

    describe('right', function() {

      it('should take the user to the contacts page', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('contacts');
      });
    });

    describe('top', function() {
      it('should scroll the watch face up', function() {
        spyOn(page, 'scrollUp');
        page.configureButtons();
        eventHub.trigger('top');
        expect(page.scrollUp).toHaveBeenCalled();
      });
    });

    describe('bottom', function() {
      it('should scroll the watch face down', function() {
        spyOn(page, 'scrollDown');
        page.configureButtons();
        eventHub.trigger('bottom');
        expect(page.scrollDown).toHaveBeenCalled();
      });
    });

  });

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      page.render();
      expect(page.$el).toContainText('Hello, World!');
    });

    it('returns the view object', function() {
      expect(page.render()).toEqual(page);
    });

  });

});
