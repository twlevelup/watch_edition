const compileWatchNotificationForm = require("../templates/watchNotificationForm.hbs");
const selectors = require("./selectors");

const escape = document.createElement("textarea");
const escapeHTML = html => {
  escape.textContent = html;
  return escape.innerHTML;
};

const createNotificationHandler = (notifications) => {

  const notificationContainer = document.getElementById(selectors.notification.container);
  const notificationMessage = document.getElementById(selectors.notification.messageDisplay);
  const notificationButtonOkay = document.getElementById(selectors.notification.okayButton);

  const notificationForm = document.getElementById(selectors.notificationForm.mainForm);

  notificationForm.innerHTML = compileWatchNotificationForm({ notifications });

  const notificationFormSend = document.getElementById(selectors.notificationForm.sendButton);
  const notificationFormMessage = document.getElementById(selectors.notificationForm.formMessage);
  const notificationTypeSelect = document.getElementById(selectors.notificationForm.typeSelect);

  notificationFormMessage.value = notifications[0].defaultValue;

  const updateFormMessage = (event) => {
    const selectedNotification = _.find(notifications, {notificationType: event.target.value});
    notificationFormMessage.value = selectedNotification.defaultValue;
  };

  const showNotification = (message) => {
    notificationContainer.hidden = false;
    notificationMessage.innerHTML = escapeHTML(message);
  }

  const hideNotification = () => {
    notificationContainer.hidden = true;
  }

  notificationTypeSelect.addEventListener('change', updateFormMessage)
  notificationFormSend.addEventListener("click", () => showNotification(notificationFormMessage.value));
  notificationContainer.addEventListener("click", hideNotification);

  return {
    show: showNotification,
    hide: hideNotification,
  }
}

module.exports = createNotificationHandler
