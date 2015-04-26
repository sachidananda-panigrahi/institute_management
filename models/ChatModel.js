// Dependencies
var mongoose = require('mongoose');
var CONSTANT = require('../utilities/Constant').CONSTANTS;

// Model Definition
var chatSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: CONSTANT.DOCUMENT_NAMES.USER },
    msg_content: String, 
    msg_time: Date
});

// Export module.
module.exports = mongoose.model(CONSTANT.DOCUMENT_NAMES.CHAT, chatSchema);