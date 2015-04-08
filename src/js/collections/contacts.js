var Backbone = require('backbone'),
    ContactModel = require('../models/contact');

var ContactCollection = Backbone.Collection.extend({
    model:  ContactModel
});

module.exports = ContactCollection;
