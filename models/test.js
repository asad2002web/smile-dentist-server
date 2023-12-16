const mongoose = require('mongoose');
const { Schema } = mongoose;

const testSchema = new Schema({
    name: String,
    age: Number
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;