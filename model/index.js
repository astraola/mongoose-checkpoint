const mongoose = require ('mongoose');

const personschema = new mongoose.Schema({
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    password: 'string',
    date:{ type: Date, define: Date.now}
})

const person = mongoose.model('person', personschema);

module.exports = person;