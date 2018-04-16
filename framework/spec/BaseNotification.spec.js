const BaseNotification = require("../src/BaseNotification");
const NotificationHub = require("../src/NotificationHub");

jest.mock("../src/NotificationHub", () => ({
  hide: jest.fn(),
}));

describe("BaseNotification", () => {
  let baseNotification;
  beforeEach(() => {
    baseNotification = new BaseNotification();
  });

  describe("default hehaviour", () => {
    it("should return a default template", () => {
      const template = baseNotification.template();
      expect(template).toContain("Base notification:");
    });

    it("should hideNotification on leftButtonEvent", () => {
      baseNotification.leftButtonEvent();
      expect(NotificationHub.hide).toHaveBeenCalled();
    });

    it("should hideNotification on topButtonEvent", () => {
      baseNotification.topButtonEvent();
      expect(NotificationHub.hide).toHaveBeenCalled();
    });

    it("should hideNotification on rightButtonEvent", () => {
      baseNotification.rightButtonEvent();
      expect(NotificationHub.hide).toHaveBeenCalled();
    });

    it("should hideNotification on bottomButtonEvent", () => {
      baseNotification.bottomButtonEvent();
      expect(NotificationHub.hide).toHaveBeenCalled();
    });

    it("should hideNotification on faceButtonEvent", () => {
      baseNotification.faceButtonEvent();
      expect(NotificationHub.hide).toHaveBeenCalled();
    });
  });
});
