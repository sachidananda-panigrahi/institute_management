// Dependencies
var mongoose = require('mongoose');
var CONSTANT = require('../utilities/Constant').CONSTANTS;

// Model Definition
var userSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    mobile: {type: Number},
    city: {type: String},
    state: {type: String},
    motherTongue: {type: String},
    nationality: {type: String},
    password: {type: String},
    birthDate: {type: Date},
    gender: {type: String},
    createdAt: {type: Date},
    profilePic: { type: String },
    profilePicUrl: { type: String },
    status: {type: String}
});

// Export module.
module.exports = mongoose.model(CONSTANT.DOCUMENT_NAMES.USER, userSchema);