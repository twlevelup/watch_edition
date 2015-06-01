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
    beforeEach(function(){
      page.buttonEvents = {
        buttonId1: 'functionButtonEvent1',
        buttonId2: 'functionButtonEvent2',
        buttonId3: 'functionButtonEvent3'
      };
      page.functionButtonEvent1 = jasmine.createSpy('buttonEvent1');
      page.functionButtonEvent2 = jasmine.createSpy('buttonEvent2');
      page.functionButtonEvent3 = jasmine.createSpy('buttonEvent3');

      page.setButtonEvents();
    });

    it('should map button event handlers to the button elements', function(){
      _.each(page.buttonEvents, function(eventHandler, buttonEvent){
        page.trigger(buttonEvent);
        expect(page[eventHandler]).toHaveBeenCalled();
      });
    });
  });

  describe('navigation helpers', function () {
    describe('back', function () {
      it('should go back in the browser history');
    });
  });

});
