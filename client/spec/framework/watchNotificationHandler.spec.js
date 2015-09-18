'use strict';

var NotificationHandler = require('../../src/js/framework/watchNotificationHandler'),
  Notifications = require('../../src/js/framework/watchNotification'),
  eventHub = require('../../src/js/framework/eventHub');

describe('NotificationHandler', function() {

  var notificationHandler;

  beforeEach(function() {
    notificationHandler = new NotificationHandler();
  });

  describe('The Constuctor', function() {
    it('should load notifications passed via the constructor', function() {
      var notifications = {
        foo: {a: 1},
        bar: {b:2},
        baz: {c: 3}
      };
      notificationHandler = new NotificationHandler(notifications);
      expect(notificationHandler.notifications).toEqual(notifications);
    });
  });

  describe('loadNotifications', function() {
    var notifications = {
      foo: {a: 1},
      bar: {b:2},
      baz: {c: 3}
    };

    it('should register each notification', function() {
      notificationHandler.loadNotifications(notifications);
      expect(notificationHandler.notifications).toEqual(notifications);
    });
  });

  it('should setup an event handler for the notification', function() {
    var DummyNotification = Notifications.extend({});
    notificationHandler.loadNotifications({dummyNotification: new DummyNotification()});
    spyOn(notificationHandler, 'displayNotification');
    eventHub.trigger('dummyNotification', {message: 'foo'});
    expect(notificationHandler.displayNotification).toHaveBeenCalledWith('dummyNotification', {message: 'foo'});
  });

  describe('Displaying notifications', function() {

    describe('when a valid notification is triggered', function() {
      var DummyNotification;
      beforeEach(function() {
        DummyNotification = Notifications.extend({});
        notificationHandler.notifications = {};
        notificationHandler.loadNotifications({dummyNotification: new DummyNotification()});
        spyOn(notificationHandler.notifications.dummyNotification, 'render');
      });

      it('should display the notification', function() {
        eventHub.trigger('dummyNotification', {message: 'foo'});
        expect(notificationHandler.notifications.dummyNotification.render).toHaveBeenCalled();
      });

    });
  });

});
