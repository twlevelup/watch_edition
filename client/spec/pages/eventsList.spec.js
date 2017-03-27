const EventsList = require('../../src/js/pages/eventsList');
const eventHub = require('watch_framework').EventHub;

let page;

describe('The Events List', () => {
  beforeEach(() => {
    page = new EventsList();
    page.back = () => {};
  });

  describe('button events', () => {
    describe('top', () => {
      it('should move the selection to the previous event', () => {
        spyOn(page, 'previous');
        page.configureButtons();
        eventHub.trigger('top');
        expect(page.previous).toHaveBeenCalled();
      });
    });

    describe('right', () => {
      it('should select the current event', () => {
        spyOn(page, 'select');
        page.configureButtons();
        eventHub.trigger('right');
        expect(page.select).toHaveBeenCalled();
      });
    });

    describe('bottom', () => {
      it('should move the selection to the next event', () => {
        spyOn(page, 'next');
        spyOn(page, 'select');
        page.configureButtons();
        eventHub.trigger('bottom');
        expect(page.next).toHaveBeenCalled();
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

  describe('select', () => {
    it('navigates to the event details page for the selected event', () => {
      const cid = 'c42';
      spyOn(window.App, 'navigate');
      page.selected = { cid };
      page.select();
      expect(window.App.navigate).toHaveBeenCalledWith(`eventDetails/${cid}`);
    });
  });
});
