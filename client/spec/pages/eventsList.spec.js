'use strict';

var EventsList = require('../../src/js/pages/eventsList'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

describe('The Events List', function() {

  beforeEach(function() {
    page = new EventsList();
  });

  describe('button events', function() {

    describe('top', function() {
      it('should move the selection to the previous event', function() {
        spyOn(page, 'previous');
        page.configureButtons();
        eventHub.trigger('top');
        expect(page.previous).toHaveBeenCalled();
      });
    });

    describe('right', function() {
      it('should select the current event', function() {
        spyOn(page, 'select');
        page.configureButtons();
        eventHub.trigger('right');
        expect(page.select).toHaveBeenCalled();
      });
    });

    describe('bottom', function() {
      it('should move the selection to the next event', function() {
        spyOn(page, 'next');
        page.configureButtons();
        eventHub.trigger('bottom');
        expect(page.next).toHaveBeenCalled();
      });
    });

    describe('left', function() {
      it('should go back', function() {
        spyOn(page, 'back');
        page.configureButtons();
        eventHub.trigger('left');
        expect(page.back).toHaveBeenCalled();
      });
    });

  });

  describe('select', function() {
    it('navigates to the event details page for the selected event', function() {
      var cid = 'c42';
      spyOn(window.App, 'navigate');
      page.selected = { cid: cid };
      page.select();
      expect(window.App.navigate).toHaveBeenCalledWith('eventDetails/' + cid);
    });
  });

});
