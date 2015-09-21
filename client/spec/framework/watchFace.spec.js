'use strict';

var WatchFace = require('../../src/js/framework/watchFace'),
  eventHub = require('../../src/js/framework/eventHub');

describe('WatchFace', function() {

  var watchFace;

  beforeEach(function() {
    setFixtures('<div id="watch">');
    watchFace = new WatchFace();
  });

  describe('rendering', function() {

    it('should render itself automatically in the #watch element', function() {

      expect($('#watch')).toContainElement('#watch-face');

    });

  });

  describe('Watch buttons', function() {

    var eventHandlers;

    beforeEach(function() {

      eventHandlers = {
        right: jasmine.createSpy('right'),
        left: jasmine.createSpy('left'),
        top: jasmine.createSpy('top'),
        bottom: jasmine.createSpy('bottom'),
        face: jasmine.createSpy('face')
      };

      eventHub.on('right', eventHandlers.right);
      eventHub.on('left', eventHandlers.left);
      eventHub.on('top', eventHandlers.top);
      eventHub.on('bottom', eventHandlers.bottom);
    });

    _.each(['right', 'left', 'top', 'bottom'], function(buttonName) {
      describe('when the user clicks the ' + buttonName + ' button', function() {
        it('should trigger the event in ' + buttonName + ' event hub', function() {
          $('#button-' + buttonName).trigger('click');
          expect(eventHandlers[buttonName]).toHaveBeenCalled();
        });
      });
    });

    describe('when the user clicks the watch face', function () {
      it('should trigger the face event in the event hub', function () {
        var faceEventHandler = jasmine.createSpy();
        eventHub.on('face', faceEventHandler);
        $('#watch-face').trigger('click');
        expect(faceEventHandler).toHaveBeenCalled();
      });
    });

  });

});
