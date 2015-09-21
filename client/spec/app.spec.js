'use strict';

var Router = require('../src/js/framework/router'),
  WatchFace = require('../src/js/framework/watchFace'),
  NotificationHandler = require('../src/js/framework/watchNotificationHandler');

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

  xdescribe('clock', function() {
    it('should start the clock');
  });

});
