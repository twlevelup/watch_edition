'use strict';

var watchFramework = require('watch_framework');
var WatchFace = watchFramework.WatchFace;
var WatchNotificationHandler = watchFramework.WatchNotificationHandler;
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
    expect(app.notificationHandler instanceof WatchNotificationHandler).toBeTruthy();
  });

  xit('should have an event hub', function() {
    expect(app.vent.on).toBeTruthy();
  });

  it('should configure buttons for the active page', function() {

    app.activePage = {
      stopListening: function() {},

      configureButtons: function() {}
    };

    spyOn(app.activePage, 'stopListening');
    spyOn(app.activePage, 'configureButtons');

    app.configureButtons();
    expect(app.configureButtons).toBeTruthy();
    expect(app.activePage.stopListening).toHaveBeenCalled();
    expect(app.activePage.configureButtons).toHaveBeenCalled();

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
