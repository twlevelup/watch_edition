const Backbone = require('backbone');
const EventDetails = require('../../src/js/pages/eventDetails');
const storage = require('../../src/storage');
const eventHub = require('watch_framework').EventHub;

let page;

describe('The Event details page', () => {
  beforeEach(() => {
    page = new EventDetails();
    page.back = () => {};
  });

  describe('a new event details page', () => {
    it('should load the events data', () => {
      // FIXME this is crap, data should be passed in to the constructor for the page
      expect(page.data).toEqual(storage.eventsData);
    });
  });

  describe('getEventData', () => {
    let cid;

    beforeEach(() => {
      page.data = new Backbone.Collection({ foo: 'getEventData' });
      cid = page.data.last().cid;
    });

    it('should return the correct model from the eventsData collection', () => {
      page.options = { cid };
      expect(page.getEventData().toJSON()).toEqual({ foo: 'getEventData' });
    });
  });

  describe('button events', () => {
    beforeEach(() => {
      page.configureButtons();
    });

    describe('top', () => {
      it('should scroll the watch face up', () => {
        spyOn(page, 'scrollUp');
        page.configureButtons();
        eventHub.trigger('top');
        expect(page.scrollUp).toHaveBeenCalled();
      });
    });

    describe('bottom', () => {
      it('should scroll the watch face down', () => {
        spyOn(page, 'scrollDown');
        page.configureButtons();
        eventHub.trigger('bottom');
        expect(page.scrollDown).toHaveBeenCalled();
      });
    });

    describe('left', () => {
      it('should go back', () => {
        spyOn(page, 'back');
        page.configureButtons();
        eventHub.trigger('left');
        expect(page.back).toHaveBeenCalled();
      });
    });
  });

  describe('rendering', () => {
    const eventData = new Backbone.Model({
      name: 'event name',
      description: 'description',
    });

    beforeEach(() => {
      spyOn(page, 'getEventData').and.returnValue(eventData);
    });

    it('should have the correct title', () => {
      page.render();
      expect(page.$el).toContainHtml('<h1>event name</h1>');
    });

    it('should have the correct event description', () => {
      page.render();
      expect(page.$el).toContainHtml('<p>description</p>');
    });

    it('returns the view object', () => {
      expect(page.render()).toEqual(page);
    });
  });
});
