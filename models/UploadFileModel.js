// Dependencies
var mongoose = require('mongoose');
var CONSTANT = require('../utilities/Constant').CONSTANTS;

// Model Definition
var fileSchema = new mongoose.Schema({
    _id : { type: mongoose.Schema.Types.ObjectId, ref: CONSTANT.DOCUMENT_NAMES.FILE },
    length : Number,
    chunkSize : Number,
    uploadDate : Date,
    md5 : String,
    filename : String,
    contentType : String,
    aliases : Array,
    metadata : Object
});

// Export module.
module.exports = mongoose.model(CONSTANT.DOCUMENT_NAMES.FILE, fileSchema);