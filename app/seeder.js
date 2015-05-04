var models = require('./models');

module.exports = {
  check: function() {
    models.Contact.find({}, function(err, contacts) {
      if (contacts.length === 0) {
        console.log('no contacts found, seeding...');
        var newContact = new models.Contact({
          email: 'jkat98@gmail.com',
          name: 'Adam Hope',
          phone: '215-123-1234'
        });
        newContact.save(function(err, contact) {
          console.log('successfully inserted contact: ' + contact._id);
        });

        newContact = new models.Contact({
          email: 'testerson@example.com',
          name: 'Marzena ksdhfksjdfk',
          phone: '215-123-1234'
        });
        newContact.save(function(err, contact) {
          console.log('successfully inserted contact: ' + contact._id);
        });

        newContact = new models.Contact({
          email: 'nancy@testerson.com',
          name: "James Lewis",
          phone: '215-123-1234'
        });
        newContact.save(function(err, contact) {
          console.log('successfully inserted contact: ' + contact._id);
        });
      } else {
        console.log('found ' + contacts.length + ' existing contacts!');
      }
    });
  }
};
