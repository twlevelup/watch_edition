'use strict';

var notificationsConfig = [
    {
      name: 'Go to contacts on right button',
      defaultMessage: 'Click right button to go to contacts.',
      buttonEvents: {
        right: 'navigateToContacts'
      },
      navigateToContacts: function() {
        global.App.navigate('contacts');
      }
    },
    {
      name: 'Left button will be contacts now',
      defaultMessage: 'Now right button will lead you to contacts.',
      buttonEvents: {
        right: 'navigateToContacts'
      },
      navigateToContacts: function() {
        global.App.navigate('contacts');
      }
    },
    {
      name: 'Contacts on the right!',
      buttonEvents: {
        right: 'navigateToContacts'
      },
      navigateToContacts: function() {
        global.App.navigate('contacts');
      }
    }
];

module.exports = notificationsConfig;
