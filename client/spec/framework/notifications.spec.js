'use strict';

var NotificationsPanel = require('../../src/js/framework/notifications');

describe('Notifications Panel', function() {
  var notificationPanel;

  beforeEach(function () {
    $('body').append('<div id="notification-panel" />');
    notificationPanel = new NotificationsPanel();
  });

  describe('configuring notifications', function(){
    var notificationsArray;

    beforeEach(function () {
      notificationsArray = [
        {
          name: 'Action1'
        },
        {
          name: 'Action2'
        }
      ];
      notificationPanel.configureNotifications(notificationsArray);
    });

    describe('rendering', function () {

      it('should render itself automatically in the #notification-panel element', function () {
        expect(notificationPanel.el).toContainElement('p.notification_title');
      });

      it('should contain action select field', function(){
        expect(notificationPanel.el).toContainElement('select[name="notification_action"]');
      });

      it('should contain action select field', function(){
        expect(notificationPanel.el).toContainElement('textarea[name="notification_message"]');
      });
    });

    it('should set up an event listener on "Send Notification" button', function(){
      spyOn(notificationPanel, '_sendNotification');
      notificationPanel.configureNotifications(notificationsArray);

      notificationPanel.$el.find('#button-sendNotification').trigger('click');

      expect(notificationPanel._sendNotification).toHaveBeenCalled();
    });

    describe('populating notifications select dropdown', function(){
      it('should create dropdown options with value equal to property "name" of objects in array passed as an argument', function(){
        var selectOptions = notificationPanel.$el.find('select[name="notification_action"] option');

        expect(selectOptions[0].innerHTML).toEqual(notificationsArray[0].name);
        expect(selectOptions[1].innerHTML).toEqual(notificationsArray[1].name);
      });
    });
  });

  afterEach(function () {
    $('#notification-panel').remove();
  });

});
