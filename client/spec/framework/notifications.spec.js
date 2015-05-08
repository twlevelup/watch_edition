'use strict';

var NotificationsPanel = require('../../src/js/framework/notifications'),
  App = require('../../src/js/app'),
  Page = require('../../src/js/framework/page');

global.App = App;

describe('Notifications Panel', function() {
  var notificationPanel, notificationsArray;

  beforeEach(function () {
    notificationsArray = [
      {
        name: 'Action1',
        defaultMessage: 'The message by default',
        buttonEvents: {
          left: 'callLeftButtonFunction'
        },
        callLeftButtonFunction: jasmine.createSpy("leftButtonAction1Spy")
      },
      {
        name: 'Action2'
      }
    ];
    $('body').append('<div id="notification-panel" />');
    $('body').append('<div id="notification_popup" style="display: none"><textarea id="notification_message_display"></textarea></div>');

    notificationPanel = new NotificationsPanel();
    notificationPanel.configureNotifications(notificationsArray);
  });

  describe('configuring notifications', function(){
    describe('rendering', function () {

      it('should render itself automatically in the #notification-panel element', function () {
        expect(notificationPanel.el).toContainElement('p.notification_title');
      });

      it('should contain action select field', function(){
        expect(notificationPanel.el).toContainElement('select[name="notification_action"]');
      });

      it('should contain message textarea field', function(){
        expect(notificationPanel.el).toContainElement('textarea[name="notification_message"]');
      });
    });

    it('should set up an event listener on click of "Send Notification" button', function(){
      spyOn(notificationPanel, 'showNotification');
      notificationPanel.configureNotifications(notificationsArray);

      $('#button-sendNotification').trigger('click');

      expect(notificationPanel.showNotification).toHaveBeenCalled();
    });

    describe('populating notifications select dropdown', function(){
      it('should create dropdown options with value equal to property "name" of objects in array passed as an argument', function(){
        var selectOptions = $('select[name="notification_action"] option');

        expect(selectOptions[0].innerHTML).toEqual(notificationsArray[0].name);
        expect(selectOptions[1].innerHTML).toEqual(notificationsArray[1].name);
      });
    });
  });

  describe('when user changes selection on the notification type', function(){
    describe('when the default message is provided for the option', function(){

      it('should set its value on the textarea field', function(){
        $('select[name="notification_action"]').val('Action1').change();
        expect($('textarea[name="notification_message"]').val()).toEqual(notificationsArray[0].defaultMessage);
      });
    });

    describe('when there is no default message for the option', function(){
      it('should clear the value on the textarea field', function(){
        $('textarea[name="notification_message"]').val('Some new value of our message');
        $('select[name="notification_action"]').val('Action2').change();
        expect($('textarea[name="notification_message"]').val()).toEqual('');
      });
    });

    describe('sending notification', function() {
      describe('when no notification type is selected', function () {

        beforeEach(function () {
          $('select[name="notification_action"]').val();
          $('#button-sendNotification').trigger('click');
        });

        it('should not show the notification popup', function () {
          expect($('#notification_popup').is(":visible")).toBeFalsy();
        });
      });

      describe('when a notification type is selected', function () {

        beforeEach(function () {
          global.App.router = {
            currentView: new Page()
          };

          var currentView = global.App.router.currentView;
          currentView.actionOnLeftButton = jasmine.createSpy('oldActionOnLeftButtonSpy');
          currentView.listenTo(currentView, 'left', currentView.actionOnLeftButton);

          $('select[name="notification_action"]').val('Action1');
          $('textarea[name="notification_message"]').val('Do you want to open contacts now?');

          $('#button-sendNotification').trigger('click');
        });

        it('should show the notification popup div', function () {
          expect($('#notification_popup').is(":visible")).toBeTruthy();
        });

        it('should populate message text with the provided message from textarea', function () {
          expect($('#notification_message_display').text()).toEqual('Do you want to open contacts now?');
        });

        describe('remapping the buttons of the current view to perform notification-specific actions', function () {

          it('should stop listening to the old button events', function () {
            global.App.router.currentView.trigger('left');
            expect(global.App.router.currentView.actionOnLeftButton).not.toHaveBeenCalled();
          });

          describe('when an action on a button is specified', function () {
            beforeEach(function () {
              global.App.router.currentView.trigger('left');
            });

            it('should execute the function on button clicked', function () {
               expect(notificationsArray[0].callLeftButtonFunction).toHaveBeenCalled();
            });

            it('should trigger hiding of the notifications on button clicked', function () {
              expect($('#notification_popup').is(':visible')).toBeFalsy();
            });
          });

          describe('when no action on a button is specified', function () {

            beforeEach(function () {
              global.App.router.currentView.trigger('right');
            });

            it('should hide the notifications on button clicked', function () {
              expect($('#notification_popup').is(':visible')).toBeFalsy();
            });
          });
        });
      });

      describe('cancelling notification', function () {
        beforeEach(function () {
          global.App.router = {
            currentView: {
              setButtonEvents: jasmine.createSpy('setButtonEventsSpy')
            }
          };

          $('#notification_popup').show();
          $('#notification_message_display').text('Some Notification Message');

          notificationPanel.cancelNotification();
        });

        it('should hide the notification popup', function () {
          expect($('#notification_popup').is(":visible")).toBeFalsy();
        });

        it('should clear the notification message', function () {
          expect($('#notification_message_display').text()).toEqual('');
        });

        it('should reset the button events for the current view', function () {
          expect(global.App.router.currentView.setButtonEvents).toHaveBeenCalled();
        });
      });
    });
  });

  afterEach(function () {
    $('#notification-panel').remove();
  });

});
