const NotificationHub = require("../src/NotificationHub");

describe("NotificationHub", () => {
  let eventEmitter = NotificationHub.getEventEmitter();

  beforeEach(() => {
    NotificationHub.reset();
  });

  describe("without setting handlers", () => {
    it("should not have any event names", () => {
      expect(eventEmitter.eventNames()).toEqual([]);
      expect(eventEmitter.listenerCount("showNotification")).toBe(0);
      expect(eventEmitter.listenerCount("hideNotification")).toBe(0);
    });
  });

  describe("handle onShow", () => {
    it("should have have show event", () => {
      const showMock = jest.fn();
      NotificationHub.onShow(showMock);
      expect(eventEmitter.eventNames()).toEqual(["showNotification"]);
      expect(eventEmitter.listenerCount("showNotification")).toBe(1);
      expect(showMock).not.toHaveBeenCalled();

      const prop1 = 'blah';
      const prop2 = 'blah';
      NotificationHub.show(prop1, prop2);
      expect(showMock).toHaveBeenCalledWith(prop1, prop2);

    });
  });

  describe("handle onHide", () => {
    it("should have have show event", () => {
      const hideMock = jest.fn();
      NotificationHub.onHide(hideMock);
      expect(eventEmitter.eventNames()).toEqual(["hideNotification"]);
      expect(eventEmitter.listenerCount("hideNotification")).toBe(1);
      expect(hideMock).not.toHaveBeenCalled();

      const prop1 = 'blah';
      const prop2 = 'blah';
      NotificationHub.hide();
      expect(hideMock).toHaveBeenCalledWith();
    });
  });
});
