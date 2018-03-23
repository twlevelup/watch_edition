const compileWatchNotificationForm = require("../templates/watchNotificationForm.hbs");
const selectors = require("./selectors");
const helpers = require("./helpers");
const find = require("lodash/find");
const first = require("lodash/first");

const createFormMessageHandler = (notifications, notificationFormMessage) => (event) => {
  const selectedNotification = find(notifications, {type: event.target.value});
  notificationFormMessage.value = selectedNotification.defaultValue;
};

const createShowNotificationHandler = (notificationContainer, notificationMessageDisplay) => (message) => {
  notificationContainer.hidden = false;
  notificationMessageDisplay.innerHTML = helpers.escapeHTML(message);
}

const createHideNotificationHandler = (notificationContainer) => () => {
  notificationContainer.hidden = true;
}

const createNotificationHandlers = (notifications) => {
   const notificationForm = document.getElementById(selectors.notificationForm.mainForm);
  notificationForm.innerHTML = compileWatchNotificationForm({ notifications });

  const notificationFormSend = document.getElementById(selectors.notificationForm.sendButton);
  const notificationFormMessage = document.getElementById(selectors.notificationForm.formMessage);
  const notificationFormTypeSelect = document.getElementById(selectors.notificationForm.typeSelect);
  const notificationContainer = document.getElementById(selectors.notification.container);
  const notificationMessageDisplay = document.getElementById(selectors.notification.messageDisplay);
  const notificationButtonOkay = document.getElementById(selectors.notification.okayButton);

  const show = createShowNotificationHandler(notificationContainer, notificationMessageDisplay);
  const hide = createHideNotificationHandler(notificationContainer);

  notificationFormMessage.value = first(notifications).defaultValue;
  notificationFormTypeSelect.addEventListener('change', createFormMessageHandler(notifications, notificationFormMessage))
  notificationFormSend.addEventListener("click", () => show(notificationFormMessage.value));
  notificationContainer.addEventListener("click", hide);

  return {
    show,
    hide,
  }
}

module.exports = {
  createNotificationHandlers,
  createFormMessageHandler,
  createShowNotificationHandler,
  createHideNotificationHandler,
}
