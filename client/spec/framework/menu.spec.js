'use strict';

var PageWithMenu = require('../../src/js/framework/menu');

describe('Page with menu', function() {

  var testPage, TestPage, testMenuItems;

  testMenuItems = new Backbone.Collection();
  testMenuItems.add([{label: 'first'}, {label: 'second'}, {label: 'third'}]);

  beforeEach(function() {
    var TestPage = PageWithMenu.extend({
      collection: testMenuItems
    });
    testPage = new TestPage();
  });

  describe('a new menu', function() {
    it('should have a collection of menuItems');
    it('should select the first item in the collection by default', function() {
      expect(testPage.selected.get('label')).toEqual('first');
    });
  });

  xdescribe('selecting the next item', function() {

    beforeEach(function() {
      // spyOn(testPage, 'render');
    });

    it('should select the next item in the collection', function() {
      // testPage.next();
      // expect(testPage.selected.get('label')).toEqual('second');
    });

    it('should re-render the page', function() {
      // testPage.previous();
      // expect(testPage.render).toHaveBeenCalled();
    });
  });

  xdescribe('selecting the previous item', function() {

    beforeEach(function() {
      // spyOn(testPage, 'render');
    });

    it('should select the previous item in the collection', function() {
      // testPage.next();
      // expect(testPage.selected.get('label')).toEqual('second');
    });

    it('should re-render the page', function() {
      // testPage.previous();
      // expect(testPage.render).toHaveBeenCalled();
    });
  });

  describe('rendering', function() {

    it('should have the class "page page-with-menu"', function() {
      expect(testPage.className).toEqual('page page-with-menu');
    });

    it('should add the class "selected" to the selected menu item', function() {
      testPage.render();
      expect(testPage.$el).toContainHtml('<li class="selected">first</li>');
      expect(testPage.$el).toContainHtml('<li>second</li>');
      expect(testPage.$el).toContainHtml('<li>third</li>');
    });

  });

});
