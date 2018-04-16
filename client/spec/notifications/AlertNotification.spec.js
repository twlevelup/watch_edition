const AlertNotification = require("../../src/js/notifications/AlertNotification");
const NotificationHub = require("watch-framework").NotificationHub;
const hideSpy = jest.spyOn(NotificationHub, 'hide');

describe("AlertNotification", () => {
  describe("#template", () => {
    it("should have a template", () => {
      const notification = new AlertNotification();
      expect(notification.template()).toContain("Alert");
    });
  });

  describe("#leftButtonEvent", () => {
    it("should call NotificationHub.hide", () => {
      console.log = jest.fn();
      const notification = new AlertNotification();
      notification.leftButtonEvent();
      expect(hideSpy).toHaveBeenCalled();
      expect(console.log).toHaveBeenCalledWith("LEFT");
    });
  });

});
