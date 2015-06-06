// Dependencies
var mongoose = require('mongoose');
var CONSTANT = require('../utilities/Constant').CONSTANTS;

// Model Definition
var chatSchema = new mongoose.Schema({
    user_name: String,
    profile_pic_url: { type: String },
    msg_content: String, 
    msg_time: Date
});

// Export module.
module.exports = mongoose.model(CONSTANT.DOCUMENT_NAMES.CHAT, chatSchema);