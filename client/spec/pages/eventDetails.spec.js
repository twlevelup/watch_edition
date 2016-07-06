'use strict';

var EventDetails = require('../../src/js/pages/eventDetails'),
  storage = require('../../src/storage'),
  eventHub = require('watch_framework').EventHub,
  page;

describe('The Event details page', function() {

  beforeEach(function() {
    page = new EventDetails();
  });

  describe('a new event details page', function() {
    it('should load the events data', function() {
      // FIXME this is crap, data should be passed in to the constructor for the page
      expect(page.data).toEqual(storage.eventsData);
    });
  });

  describe('getEventData', function() {

    var cid;

    beforeEach(function() {
      page.data = new Backbone.Collection({foo: 'getEventData'});
      cid = page.data.last().cid;
    });

    it('should return the correct model from the eventsData collection', function() {
      page.options = {cid: cid};
      expect(page.getEventData().toJSON()).toEqual({foo: 'getEventData'});
    });

  });

  describe('button events', function() {

    beforeEach(function() {
      page.configureButtons();
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

    describe('left', function() {
      it('should go back', function() {
        spyOn(page, 'back');
        page.configureButtons();
        eventHub.trigger('left');
        expect(page.back).toHaveBeenCalled();
      });
    });

  });

  describe('rendering', function() {

    var eventData = new Backbone.Model({
      name: 'event name',
      description: 'description'
    });

    beforeEach(function() {
      spyOn(page, 'getEventData').and.returnValue(eventData);
    });

    it('should have the correct title', function() {
      page.render();
      expect(page.$el).toContainHtml('<h1>event name</h1>');
    });

    it('should have the correct event description', function() {
      page.render();
      expect(page.$el).toContainHtml('<p>description</p>');
    });

    it('returns the view object', function() {
      expect(page.render()).toEqual(page);
    });

  });

});
