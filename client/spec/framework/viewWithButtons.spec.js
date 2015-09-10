'use strict';

var ViewWithButtons = require('../../src/js/framework/viewWithButtons'),
    app = require('../../src/js/app');

describe('A view with buttons', function() {

  // TODO put all the button config here, not in the app
  // TODO make sure it only listens to appropriate button events

  var view;

  beforeEach(function() {
    view = new ViewWithButtons();
  });

  describe('configuring buttons', function() {
    beforeEach(function() {
      view.buttonEvents = {
        buttonId1: 'functionButtonEvent1',
        buttonId2: 'functionButtonEvent2',
        buttonId3: 'functionButtonEvent3'
      };
      view.functionButtonEvent1 = jasmine.createSpy('buttonEvent1');
      view.functionButtonEvent2 = jasmine.createSpy('buttonEvent2');
      view.functionButtonEvent3 = jasmine.createSpy('buttonEvent3');

      view.setButtonEvents();
    });

    // TODO use same style as other looping tests to get more accurate test reporting
    it('should map button event handlers to the button events', function() {
      _.each(view.buttonEvents, function(eventHandler, buttonEvent) {
        app.vent.trigger(buttonEvent);
        expect(view[eventHandler]).toHaveBeenCalled();
      });
    });
  });

});
