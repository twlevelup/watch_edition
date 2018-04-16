const NotificationForm = require("../src/NotificationForm");
const BaseNotification = require("../src/BaseNotification");
const watchTemplate = require("../templates/watch.hbs");
const setupNotificationForm = require("../src/setupNotificationForm");

jest.mock("../src/setupNotificationForm", () => jest.fn());

class NewNotification {}

describe("NotificationForm", () => {
  document.body.innerHTML = watchTemplate();

  let notificationForm, notifications, renderMock;

  beforeEach(() => {
    notifications = [{ type: "new", view: NewNotification }];
    renderMock = jest.fn();
    notificationForm = new NotificationForm(notifications, renderMock);
  });

  describe("constructor", () => {
    it("should call setupNotificationForm", () => {
      expect(setupNotificationForm).toHaveBeenCalledWith(notifications);
    });
  });

  describe("show default notification", () => {
    it("should call render with BaseNotification", () => {
      const props = { foo: "bar" };
      notificationForm.show("", props);
      expect(renderMock).toHaveBeenCalledWith(
        notificationForm.container,
        BaseNotification,
        props,
      );
      expect(notificationForm.container.hidden).toBe(false);
    });
  });

  describe("show with found notification", () => {
    it("should call render with BaseNotification", () => {
      const props = { foo: "bar" };
      notificationForm.show("new", props);
      expect(renderMock).toHaveBeenCalledWith(
        notificationForm.container,
        NewNotification,
        props,
      );
      expect(notificationForm.container.hidden).toBe(false);
    });
  });

  describe("hide", () => {
    it("should set container to be hidden", () => {
      notificationForm.show("", {});
      expect(notificationForm.container.hidden).toBe(false);
      notificationForm.hide();
      expect(notificationForm.container.hidden).toBe(true);
    });
  });
});
