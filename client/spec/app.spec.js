'use strict';

var watchFramework = require('watch_framework');
var WatchFace = watchFramework.WatchFace;
var NotificationHandler = watchFramework.NotificationHandler;
var Router = require('../src/js/router');

var app = require('../src/js/app');

// TODO replace .on with listenTo

describe('The App', function() {

  beforeEach(function() {
    app.start();
  });

  it('should have a router', function() {
    expect(app.router instanceof Router).toBeTruthy();
  });

  it('should have a watch face', function() {
    expect(app.watchFace instanceof WatchFace).toBeTruthy();
  });

  it('should have a notification handler', function() {
    expect(app.notificationHandler instanceof NotificationHandler).toBeTruthy();
  });

  it('should have an event hub', function() {
    // TODO it would be good to check type of app.vent
    expect(app.vent.on).toBeTruthy();
  });

  describe('configureButtons', function() {

    beforeEach(function() {
      app.activePage = {
        stopListening: function() {},

        configureButtons: function() {}
      };

      spyOn(app.activePage, 'stopListening');
    });

    it('should be a function', function() {
      expect(typeof app.configureButtons === 'function').toEqual(true);
    });

    it('should configure buttons for the active notification', function() {

      app.notificationHandler.activeNotification = {
        configureButtons: function() {}
      };

      spyOn(app.notificationHandler.activeNotification, 'configureButtons');
      app.configureButtons();

      expect(app.activePage.stopListening).toHaveBeenCalled();
      expect(app.notificationHandler.activeNotification.configureButtons).toHaveBeenCalled();

    });

    it('when there is no notification, should configure buttons for the active page', function() {
      app.notificationHandler.activeNotification = undefined;
      spyOn(app.activePage, 'configureButtons');

      app.configureButtons();
      expect(app.activePage.stopListening).toHaveBeenCalled();
      expect(app.activePage.configureButtons).toHaveBeenCalled();

    });

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

  xdescribe('clock', function() {
    it('should start the clock');
  });

});
