'use strict';

var notificationsConfig = [
    {
      name: 'Some notification name',
      defaultMessage: 'Hello world I am here and it is cool!',
      buttonEvents: {
        left: 'navigateToContacts'
      },
      navigateToContacts: function() {
        global.App.navigate('contacts', true);
      }
    },
    {
      name: 'Second notification name',
      defaultMessage: 'Now we have two messages?',
      buttonEvents: {
        left: 'navigateToContacts'
      },
      navigateToContacts: function() {
        global.App.navigate('contacts', true);
      }
    },
    {
      name: 'Third notification name',
      buttonEvents: {
        left: 'navigateToContacts'
      },
      navigateToContacts: function() {
        global.App.navigate('contacts', true);
      }
    }
];

module.exports = notificationsConfig;
