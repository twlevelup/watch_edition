const watchTemplate = require("../templates/watch.hbs");
const setupNotificationForm = require("../src/setupNotificationForm");
const NotificationHub = require("../src/NotificationHub");

jest.mock("../src/NotificationHub", () => ({
  show: jest.fn(),
}));

describe("setupNotificationForm", () => {
  document.body.innerHTML = watchTemplate();

  let notifications, selectors;

  beforeAll(() => {
    notifications = [
      { type: "new", defaultValue: "blah" },
      { type: "new2", defaultValue: "blah2" }
    ];
    selectors = setupNotificationForm(notifications);
  });

  it("should initialise form inputs", () => {
    expect(selectors.formTypeSelect.value).toBe("new");
    expect(selectors.formMessage.value).toBe("blah");
  });

  it("should update default message", () => {
    selectors.formTypeSelect.value = "new2";
    const evt = document.createEvent("HTMLEvents");
    evt.initEvent("change", false, true);
    selectors.formTypeSelect.dispatchEvent(evt)
    expect(selectors.formMessage.value).toBe("blah2");
  });

  it("should trigger show when hitting send", () => {
    selectors.formSend.click();
    expect(NotificationHub.show).toHaveBeenCalledWith("new2", { message: "blah2" });
  });
});
