'use strict';

var NotificationsPanel = require('../../src/js/framework/notifications');
var NotificationsArray = require('../../src/js/notifications/notificationsArray');

describe('Notifications Panel', function() {
  var notificationPanel;

  beforeEach(function () {
    $('body').append('<div id="notification-panel" />');
    NotificationsArray = jasmine.createSpy();
    notificationPanel = new NotificationsPanel();
  });

  describe('initialization', function(){
    describe('rendering', function () {

      it('should render itself automatically in the #notification-panel element', function () {
        expect($('#notification-panel')).toContainElement('p.notification_title');
      });

      it('should contain action select field', function(){
        expect($('#notification-panel')).toContainElement('select[name="notification_action"]');
      });

      it('should contain action select field', function(){
        expect($('#notification-panel')).toContainElement('textarea[name="notification_message"]');
      });
    });

    it('should set up an event listener on "Send Notification" button', function(){
      spyOn(notificationPanel, '_setUpNotificationsPanel');
      notificationPanel.initialize();
      $('#button-sendNotification').trigger('click');
      expect(notificationPanel._setUpNotificationsPanel).toHaveBeenCalled();
    });

    xdescribe('populating notifications select dropdown', function(){
      it('should create options with value equal to name property of objects in notificationsArray', function(){
          expect(notificationPanel.notificationsArray).toEqual([{name: 'b'}]);
      });
    });
  });



  afterEach(function () {
    $('#notification-panel').remove();
  });

});
