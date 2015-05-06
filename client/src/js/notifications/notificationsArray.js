'use strict';

var notificationsConfig = [
    {
      name: 'Some notification name',
      defaultMessage: 'Hello world I am here and it is cool!',
      buttonsEvents: {
        left: 'someMethodWillHappen'
      },
      someMethodWillHappen: function() {
        //console.log("Some method happened");
      }
    },
    {
      name: 'Second notification name',
      defaultMessage: 'Now we have two messages?',
      buttonsEvents: {
        left: 'someMethodWillHappenToo'
      },
      someMethodWillHappenToo: function() {
        //console.log("Some method happened too");
      }
    },
    {
      name: 'Third notification name',
      buttonsEvents: {
        left: 'someMethodWillHappenThree'
      },
      someMethodWillHappenThree: function() {
        //console.log("Some method happened three");
      }
    }
];

module.exports = notificationsConfig;
