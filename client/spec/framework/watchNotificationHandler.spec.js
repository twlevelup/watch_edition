'use strict';

var NotificationHandler = require('../../src/js/framework/watchNotificationHandler'),
  Notifications = require('../../src/js/framework/watchNotification');

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

  describe('Displaying notifications', function() {

    describe('when a valid notification is triggered', function() {
      var TestNotification;
      beforeEach(function() {
        TestNotification = Notifications.extend({});
        notificationHandler.notifications = {};
        notificationHandler.loadNotifications({testNotification: new TestNotification()});
        spyOn(notificationHandler.notifications.testNotification, 'render');
      });

      it('should display the notification', function() {
        notificationHandler.displayNotification('testNotification', {message: 'foo'});
        expect(notificationHandler.notifications.testNotification.render).toHaveBeenCalled();
  });

    });
  });

});
