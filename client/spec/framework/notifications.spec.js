// 'use strict';
//
// var NotificationsPanel = require('../../src/js/framework/notificationsForm'),
//   App = require('../../src/js/app'),
//   Page = require('../../src/js/framework/page');
//
// global.App = App;
//
// describe('remapping the buttons of the current view to perform notification-specific actions', function() {
//
//   it('should stop listening to the old button events', function() {
//     global.App.router.currentView.trigger('left');
//     expect(global.App.router.currentView.actionOnLeftButton).not.toHaveBeenCalled();
//   });
//
//   describe('when an action on a button is specified', function() {
//     beforeEach(function() {
//       global.App.router.currentView.trigger('left');
//     });
//
//     it('should execute the function on button clicked', function() {
//       expect(notificationsArray[0].callLeftButtonFunction).toHaveBeenCalled();
//     });
//
//     it('should trigger hiding of the notifications on button clicked', function() {
//       expect($('#notification_popup').is(':visible')).toBeFalsy();
//     });
//   });
//
//   describe('when no action on a button is specified', function() {
//
//     beforeEach(function() {
//       global.App.router.currentView.trigger('right');
//     });
//
//     it('should hide the notifications on button clicked', function() {
//       expect($('#notification_popup').is(':visible')).toBeFalsy();
//     });
//   });
// });
//
// describe('cancelling notification', function() {
//   beforeEach(function() {
//     global.App.router = {
//       currentView: {
//         setButtonEvents: jasmine.createSpy('setButtonEventsSpy')
//       }
//     };
//
//     $('#notification_popup').show();
//     $('#notification_message_display').text('Some Notification Message');
//
//     notificationPanel.cancelNotification();
//   });
//
//   it('should hide the notification popup', function() {
//     expect($('#notification_popup').is(':visible')).toBeFalsy();
//   });
//
//   it('should clear the notification message', function() {
//     expect($('#notification_message_display').text()).toEqual('');
//   });
//
//   it('should reset the button events for the current view', function() {
//     expect(global.App.router.currentView.setButtonEvents).toHaveBeenCalled();
//   });
// });
