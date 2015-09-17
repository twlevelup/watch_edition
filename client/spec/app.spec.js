'use strict';

var Router = require('../src/js/framework/router'),
  WatchFace = require('../src/js/framework/watchFace');

var app = require('../src/js/app');

describe('The App', function() {

  beforeEach(function() {
    setFixtures('<div id="button-right" />' +
    '<div id="button-left" />' +
    '<div id="button-top" />' +
    '<div id="button-bottom" />' +
    '<div id="watch-face" />');
    app.start();
  });

  it('should have a router', function() {
    expect(app.router instanceof Router).toBeTruthy();
  });

  it('should have a watch face', function() {
    expect(app.watchFace instanceof WatchFace).toBeTruthy();
  });

  it('should have an event hub', function () {
    expect(app.vent.on).toBeTruthy();
  });

  describe('navigate', function() {

    // TODO should this be renamed and also trigger render or init ?

    beforeEach(function() {
      spyOn(app.router, 'navigate');
    });

    it('should call navigate on the router with the route', function() {
      app.navigate('foo');
      expect(app.router.navigate).toHaveBeenCalledWith('foo', true);
    });

  });

  describe('watch buttons', function() {

    var eventHandlers;

    beforeEach(function() {

      eventHandlers = {
        right: jasmine.createSpy('right'),
        left: jasmine.createSpy('left'),
        top: jasmine.createSpy('top'),
        bottom: jasmine.createSpy('bottom'),
        face: jasmine.createSpy('face')
      };

      app.vent.on('right', eventHandlers.right);
      app.vent.on('left', eventHandlers.left);
      app.vent.on('top', eventHandlers.top);
      app.vent.on('bottom', eventHandlers.bottom);
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
        app.vent.on('face', faceEventHandler);
        $('#watch-face').trigger('click');
        expect(faceEventHandler).toHaveBeenCalled();
      });
    });

  });

  xdescribe('clock', function() {
    it('should start the clock');
  });

});
