// Dependencies
var mongoose = require('mongoose');
var CONSTANT = require('../utilities/Constant').CONSTANTS;

// Model Definition
var userSchema = new mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String},
    mobile: {type: Number},
    city: {type: String},
    state: {type: String},
    mother_tongue: {type: String},
    nationality: {type: String},
    password: {type: String},
    birthdate: {type: Date},
    gender: {type: String},
    created_at: {type: Date},
    profile_pic: { type: String },
    profile_pic_url: { type: String },
    status: {type: String}
});

// Export module.
module.exports = mongoose.model(CONSTANT.DOCUMENT_NAMES.USER, userSchema);