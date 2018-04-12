const NotificationCenter = require("../src/NotificationCenter");
const BaseNotification = require("../src/BaseNotification");
const watchTemplate = require("../templates/watch.hbs");
const setupNotificationForm = require("../src/setupNotificationForm");

jest.mock("../src/setupNotificationForm", () => jest.fn());

class NewNotification {}

describe("NotificationCenter", () => {
  document.body.innerHTML = watchTemplate();

  let notificationCenter, notifications, renderMock;

  beforeEach(() => {
    notifications = [{ type: "new", view: NewNotification }];
    renderMock = jest.fn();
    notificationCenter = new NotificationCenter(notifications, renderMock);
  });

  describe("constructor", () => {
    it("should call setupNotificationForm", () => {
      expect(setupNotificationForm).toHaveBeenCalledWith(
        notifications,
        notificationCenter.show,
      );
    });
  });

  describe("show default notification", () => {
    it("should call render with BaseNotification", () => {
      const props = { foo: "bar" };
      notificationCenter.show("", props);
      expect(renderMock).toHaveBeenCalledWith(
        notificationCenter.container,
        BaseNotification,
        props,
      );
      expect(notificationCenter.container.hidden).toBe(false);
    });
  });

  describe("show with found notification", () => {
    it("should call render with BaseNotification", () => {
      const props = { foo: "bar" };
      notificationCenter.show("new", props);
      expect(renderMock).toHaveBeenCalledWith(
        notificationCenter.container,
        NewNotification,
        props,
      );
      expect(notificationCenter.container.hidden).toBe(false);
    });
  });

  describe("hide", () => {
    it("should set container to be hidden", () => {
      notificationCenter.show("", {});
      expect(notificationCenter.container.hidden).toBe(false);
      notificationCenter.hide();
      expect(notificationCenter.container.hidden).toBe(true);
    });
  });
});
