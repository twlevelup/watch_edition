'use strict';

var Page = require('../../src/js/framework/page');

describe('A generic page', function() {

  var page;

  beforeEach(function() {
    page = new Page();
  });

  describe('rendering', function() {

    it('should have the class "page"', function() {
      expect(page.className).toEqual('page');
    });

    it('should replace the current view');

  });

  describe('navigation helpers', function() {
    describe('back', function() {
      it('should go back in the browser history');
    });
  });

});
