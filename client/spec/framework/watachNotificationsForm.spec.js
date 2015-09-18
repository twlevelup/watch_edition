'use strict';

var NotificationForm = require('../../src/js/framework/watchNotificationsForm'),
  App = require('../../src/js/app');

global.App = App;

// TODO replace .on with .listenTo

describe('Notifications form', function() {
  var notificationsForm, notificationsCfg;

  beforeEach(function() {

    setFixtures('<div id="notification-form" />');

    notificationsForm = new NotificationForm();

    notificationsCfg = [
      {
        label: 'Action1',
        notificationType: 'foo',
        defaultValue: 'The default message'
      },
      {
        label: 'Action2',
        notificationType: 'bar',
        defaultValue: 'A different default message'
      },
      {
        label: 'Action3',
        notificationType: 'bar'
      }
    ];

    notificationsForm.configureNotifications(notificationsCfg);
  });

  describe('Rendering the notification form', function() {

    describe('display', function() {

      it('should have a title', function() {
        expect(notificationsForm.$el).toContainElement('p.notification-title');
      });

      it('should contain the action select field', function() {
        expect(notificationsForm.$el).toContainElement('.notification-type');
      });

      it('should contain the message textarea field', function() {
        expect(notificationsForm.$el).toContainElement('.notification-message');
      });
    });

  });

  xdescribe('when the user changes the notification type', function() {
    it('should update the textarea with the default message', function() {
      global.console.log('before', notificationsForm.$el.find('select :selected').val());
      var secondMenuOption = notificationsForm.$el.find('.notification-type option:nth-child(2)');
      secondMenuOption.prop('selected', true);
      global.console.log('after', notificationsForm.$el.find('select :selected').val());
      expect(notificationsForm.$el.find('.notification-message').val()).toEqual('A different default message');
    });
  });

  describe('notifications configuration', function() {

    describe('labels', function() {
        it('should display the label in the dropdown', function() {
          var selectOptions = notificationsForm.$el.find('.notification-type option');
          expect($(selectOptions[0]).text()).toEqual('Action1');
          expect($(selectOptions[1]).text()).toEqual('Action2');
        });
      });

    describe('values', function() {
        it('should use the index as the value in the dropdown', function() {
          var selectOptions = notificationsForm.$el.find('.notification-type option');
          expect($(selectOptions[0]).val()).toEqual('0');
          expect($(selectOptions[1]).val()).toEqual('1');

        });
      });

    describe('default notification values', function() {

      var notificationCfg;

      describe('when there is a default value', function() {

        beforeEach(function() {
            notificationCfg = [
              {
                label: 'a',
                notificationType: 'b',
                defaultValue: 'CCC'
              }
            ];

            notificationsForm.configureNotifications(notificationCfg);

          });

        it('should display the default notification value in the textarea', function() {
            var message = notificationsForm.$el.find('.notification-message').val();
            expect(message).toEqual('CCC');
          });
      });

      describe('when there is no default value', function() {

        beforeEach(function() {
            notificationCfg = [
              {
                label: 'a',
                notificationType: 'b'
              }
            ];

            notificationsForm.configureNotifications(notificationCfg);

          });

        it('should not populate the message field', function() {
            var message = notificationsForm.$el.find('.notification-message').val();
            expect(message).toEqual('');
          });
      });

    });

  });

  describe('sending notifications to the watch', function() {

    var eventHandler, notificationCfg;

    beforeEach(function() {

      eventHandler = jasmine.createSpy();

      global.App.vent.on('b', eventHandler);

      notificationCfg = [
        {
          label: 'a',
          notificationType: 'b',
          defaultValue: 'CCC'
        }
      ];

      notificationsForm.configureNotifications(notificationCfg);

    });

    it('should send the notification message from the textarea', function() {

      notificationsForm.$el.find('#sendNotification').trigger('click');
      expect(eventHandler).toHaveBeenCalledWith({message: 'CCC'});
    });

  });

});
