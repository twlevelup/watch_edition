'use strict';

var notificationsConfig = [
    {
      name: 'Go to contacts on left button',
      defaultMessage: 'Click left button to go to contacts.',
      buttonEvents: {
        left: 'navigateToContacts'
      },
      navigateToContacts: function() {
        global.App.navigate('contacts', true);
      }
    },
    {
      name: 'Left button will be contacts now',
      defaultMessage: 'Now left button will lead you to contacts.',
      buttonEvents: {
        left: 'navigateToContacts'
      },
      navigateToContacts: function() {
        global.App.navigate('contacts', true);
      }
    },
    {
      name: 'Contacts on the left!',
      buttonEvents: {
        left: 'navigateToContacts'
      },
      navigateToContacts: function() {
        global.App.navigate('contacts', true);
      }
    }
];

module.exports = notificationsConfig;
