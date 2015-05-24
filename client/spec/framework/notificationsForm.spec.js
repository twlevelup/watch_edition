'use strict';

var NotificationsPanel = require('../../src/js/framework/notificationsForm'),
  App = require('../../src/js/app'),
  Page = require('../../src/js/framework/page');

global.App = App;

describe('Notifications form', function() {
  var notificationPanel, notificationsArray;

  beforeEach(function() {
    notificationsArray = [
      {
        name: 'Action1',
        defaultMessage: 'The message by default',
        buttonEvents: {
          left: 'callLeftButtonFunction'
        },
        callLeftButtonFunction: jasmine.createSpy('leftButtonAction1Spy')
      },
      {
        name: 'Action2'
      }
    ];

    setFixtures('<div id="notification-panel" />');

    notificationPanel = new NotificationsPanel();
    notificationPanel.configureNotifications(notificationsArray);
  });

  describe('configuring notifications', function() {

    describe('rendering', function() {

      it('should render itself automatically in the #notification-panel element', function() {
        expect(notificationPanel.$el).toContainElement('p.notification_title');
      });

      it('should contain action select field', function() {
        expect(notificationPanel.$el).toContainElement('select[name="notification_action"]');
      });

      it('should contain message textarea field', function() {
        expect(notificationPanel.$el).toContainElement('textarea[name="notification_message"]');
      });
    });

    it('should set up an event listener on click of "Send Notification" button', function() {
      spyOn(notificationPanel, 'showNotification');
      notificationPanel.configureNotifications(notificationsArray);

      notificationPanel.$el.find('#button-sendNotification').trigger('click');

      expect(notificationPanel.showNotification).toHaveBeenCalled();
    });

    describe('populating notifications select dropdown', function() {
      it('should create dropdown options with value equal to property "name" of objects in array passed as an argument', function() {
        var selectOptions = $('select[name="notification_action"] option');

        expect(selectOptions[0].innerHTML).toEqual(notificationsArray[0].name);
        expect(selectOptions[1].innerHTML).toEqual(notificationsArray[1].name);
      });
    });
  });

  describe('when user changes selection on the notification type', function() {
    describe('when the default message is provided for the notification', function() {

      it('should set show the message in the textarea', function() {
        notificationPanel.$el.find('select[name="notification_action"]').val('Action1').change();

        // console.log('HTML', notificationPanel.$el.find('select[name="notification_action"]').html());
        // console.log('XXX', notificationPanel.$el('select[name="notification_action"]'));
        expect(notificationPanel.$el.find('textarea[name="notification_message"]').val()).toEqual(notificationsArray[0].defaultMessage);
      });
    });

    describe('when there is no default message for the notification', function() {
      it('should clear the textarea', function() {
        notificationPanel.$el.find('textarea[name="notification_message"]').val('Some new value of our message');
        notificationPanel.$el.find('select[name="notification_action"]').val('Action2').change();
        expect(notificationPanel.$el.find('textarea[name="notification_message"]').val()).toEqual('');
      });
    });

    // TODO just test that the event is triggered on the watch with the right params
    describe('sending notification', function() {

      var eventHandler;

      beforeEach(function() {
        global.App.router = {
          currentView: new Page()
        };

        eventHandler = jasmine.createSpy();

        global.App.on('Action1', eventHandler);

        notificationPanel.$el.find('select[name="notification_action"]').val('Action1');
        notificationPanel.$el.find('#button-sendNotification').trigger('click');
      });

      it('should show trigger the event type on the App', function() {
        expect(eventHandler).toHaveBeenCalled();
      });

      it('should pass the message text from the provided message from textarea', function() {
        expect(eventHandler).toHaveBeenCalledWith({message: 'The message by default'});
      });

    });
  });

});
