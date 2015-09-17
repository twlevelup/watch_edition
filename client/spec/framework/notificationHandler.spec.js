'use strict';

var notificationHandler = require('../../src/js/framework/notificationHandler'),
  Notifications = require('../../src/js/framework/notification'),
  eventHub = require('../../src/js/framework/eventHub');

describe('Notifications', function() {

  describe('Loading', function() {
    it('should register the notification', function() {
      notificationHandler.loadNotification('foo', {});
      expect(notificationHandler.notifications.foo).toEqual({});
    });

    xit('should setup an event handler for the notification', function() {
      var DummyNotification = Notifications.extend({});
      notificationHandler.loadNotification('dummyNotification', jasmine.createSpy());
      spyOn(notificationHandler, 'displayNotification');
      eventHub.trigger('dummyNotification', {message: 'foo'});
      expect(notificationHandler.displayNotification).toHaveBeenCalledWith('dummyNotification', {message: 'foo'});
    });
  });

  xdescribe('Display', function() {

    describe('when a valid notification event is triggered', function() {
      beforeEach(function() {
        var DummyNotification = Notifications.extend({});
        notificationHandler.loadNotification('dummyNotification', new DummyNotification());
        spyOn(notificationHandler.notifications.dummyNotification, 'render');
      });

      it('should render the notification', function() {
        eventHub.trigger('dummyNotification', {message: 'foo'});
        expect(notificationHandler.notifications.dummyNotification.render).toHaveBeenCalled();
      });

    });
  });

});
