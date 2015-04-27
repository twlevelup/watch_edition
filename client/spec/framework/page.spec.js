'use strict';

var Page = require('../../src/js/framework/page');

describe('A generic page', function() {

  var page;

  beforeEach(function () {
    page = new Page();
  });

  describe('markup', function () {

    it('should have the class "page"', function () {

      expect(page.className).toEqual('page');

    });

  });

  describe('configuring buttons', function () {
    it('should map button event handlers to the button elements');
  });

  describe('navigation helpers', function () {
    describe('back', function () {
      it('should go back in the browser history');
    });
  });

});
