const notificationHandler = require('../src/notificationHandler');

describe('notificationHandler', () => {
  describe('#createFormMessageHandler', () => {
    const notifications = [
      {type: 'test', defaultValue: 'test message'}
    ];

    it('should set the defaultValue based on type', () => {
      const notificationFormMessage = {
        value: ''
      }

      const formMessageHandler = notificationHandler.createFormMessageHandler(notifications, notificationFormMessage)

      formMessageHandler({target: {value: 'test'}})
      expect(notificationFormMessage.value).toEqual('test message');
    })
  })

  describe('#createShowNotificationHandler', () => {
    const notifications = [
      {type: 'test', defaultValue: 'test message'}
    ];

    it('should set the defaultValue based on type', () => {
      const notificationContainer = {
        hidden: true,
      }
      const notificationMessageDisplay = {
        innerHTML: '',
      }

      const showMessageHandler = notificationHandler.createShowNotificationHandler(notificationContainer, notificationMessageDisplay)

      showMessageHandler('hello there');
      expect(notificationContainer.hidden).toEqual(false);
      expect(notificationMessageDisplay.innerHTML).toEqual('hello there');
    })
  })

  describe('#createHideNotificationHandler', () => {
    const notifications = [
      {type: 'test', defaultValue: 'test message'}
    ];

    it('should set the defaultValue based on type', () => {
      const notificationContainer = {
        hidden: false,
      }
      const hideMessageHandler = notificationHandler.createHideNotificationHandler(notificationContainer)

      hideMessageHandler();
      expect(notificationContainer.hidden).toEqual(true);
    })
  })
});
