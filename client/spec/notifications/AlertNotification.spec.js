const AlertNotification = require('../../src/js/notifications/AlertNotification');

describe('AlertNotification', () => {
  describe('#template', () => {
    it('should have a template', () => {
      const notification = new AlertNotification();
      expect(notification.template()).toContain("Alert");
    });
  });

  describe('#leftButtonEvent', () => {
    it('should have a template', () => {
      console.log = jest.fn();
      const notification = new AlertNotification();
      notification.leftButtonEvent()
      expect(console.log).toHaveBeenCalledWith("LEFT");
    });
  });
});
