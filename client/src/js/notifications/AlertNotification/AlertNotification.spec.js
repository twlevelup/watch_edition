const AlertNotification = require("./AlertNotification");
const NotificationHub = require("watch-framework").NotificationHub;
const hideSpy = jest.spyOn(NotificationHub, 'hide');

describe("AlertNotification", () => {
  describe("#render", () => {
    it("should render my page correctly", () => {
      const notification = new AlertNotification();
      expect(notification.render()).toContain("Alert");
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
