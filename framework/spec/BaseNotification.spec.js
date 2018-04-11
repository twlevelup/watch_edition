const BaseNotification = require("../src/BaseNotification");

describe("BaseNotification", () => {
  let baseNotification, hideNotification;
  beforeEach(() => {
    hideNotification = jest.fn();
    baseNotification = new BaseNotification({ hideNotification });
  });

  describe('default hehaviour', () => {

    it("should return a default template", () => {
      const template = baseNotification.template();
      expect(template).toContain("Base notification:");
    });

    it("should hideNotification on leftButtonEvent", () => {
      baseNotification.leftButtonEvent();
      expect(hideNotification).toHaveBeenCalled();
    });

    it("should hideNotification on topButtonEvent", () => {
      baseNotification.topButtonEvent();
      expect(hideNotification).toHaveBeenCalled();
    });

    it("should hideNotification on rightButtonEvent", () => {
      baseNotification.rightButtonEvent();
      expect(hideNotification).toHaveBeenCalled();
    });


    it("should hideNotification on bottomButtonEvent", () => {
      baseNotification.bottomButtonEvent();
      expect(hideNotification).toHaveBeenCalled();
    });

    it("should hideNotification on faceButtonEvent", () => {
      baseNotification.faceButtonEvent();
      expect(hideNotification).toHaveBeenCalled();
    });
  })

});
