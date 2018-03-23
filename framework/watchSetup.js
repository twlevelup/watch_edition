const compileWatchNotificationForm = require("./watchNotificationForm.hbs");

const escape = document.createElement("textarea");
const escapeHTML = html => {
  escape.textContent = html;
  return escape.innerHTML;
};

const createNotificationHandler = (notificationFormId, notifications) => {

  const notificationContainer = document.getElementById("notification-container");
  const notificationMessage = document.getElementById("notification-message-display");
  const notificationButtonOkay = document.getElementById("notification-button-okay");

  const notificationForm = document.getElementById(notificationFormId);

  notificationForm.innerHTML = compileWatchNotificationForm({ notifications });

  const notificationFormSend = document.getElementById("notification-form-send");
  const notificationFormMessage = document.getElementById("notification-form-message");
  const notificationTypeSelect = document.getElementById("notification-form-type-select");
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

module.exports = {
  createNotificationHandler,
};
