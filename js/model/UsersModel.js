// Dependencies
var mongoose = require('mongoose');
// var CONSTANT = require('../utilities/Constant').CONSTANTS;

// Model Definition
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String,
    status: String,
    first_time_login: Number
});

// Export module.
module.exports = mongoose.model('users', userSchema);