var Backbone = require('backbone'),
    ContactModel = require('../models/contact');

module.exports = ContactCollection = Backbone.Collection.extend({
    model:  ContactModel
});
