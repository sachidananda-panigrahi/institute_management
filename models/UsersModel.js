// Dependencies
var mongoose = require('mongoose');
var CONSTANT = require('../utilities/Constant').CONSTANTS;

// Model Definition
var userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    mobile: Number,
    city: String,
    state: String,
    mother_tongue: String,
    nationality: String,
    password: String,
    birthdate: Date,
    gender: String,
    created_at: Date,
    status: String
});

// Export module.
module.exports = mongoose.model(CONSTANT.DOCUMENT_NAMES.USER, userSchema);