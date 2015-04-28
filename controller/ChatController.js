// Dependencies
var mongoose = require('mongoose');
var chatModel = require('../models/ChatModel');
var Promise = require('promise');

function ChatController() {

}

ChatController.prototype.getAllChat = function () {
    return new Promise(function (resolve, reject) {
        chatModel.find({}).lean().exec(function (err, chats) {
            if (err) {
                console.log('Error fetching all chats.');
                reject(err);
            } else {
                resolve(chats);
            }
        })
    });
};

ChatController.prototype.getChatByUserId = function (userId) {
    return new Promise(function (resolve, reject) {
        chatModel.findOne({ _id: userId }).lean().exec(function (err, chats) {
            if (err) {
                console.log('Error fetching chats by Id.');
                reject(err);
            } else {
                //console.log(user);
                resolve(chats);
            }
        })
    });
};

ChatController.prototype.getChatByUserName = function (userName) {
    return new Promise(function (resolve, reject) {
        chatModel.findOne({ username: userName}).lean().exec(function (err, chats) {
            if (err) {
                console.log('Error fetching chats by Name.');
                reject(err);
            } else {
                //console.log(users);
                resolve(chats);
            }
        })
    });
};

ChatController.prototype.addChat = function (chat) {
    return new Promise(function (resolve, reject) {
        var chatDocument = new chatModel(chat);
        chatDocument.save(function (err, chat) {
            if (err) {
                console.log('Error while adding chat.');
                reject(err);
            } else {
                // console.log('Chat added successfully.');
                resolve(chat);
            }
        })
    });
};

ChatController.prototype.deleteChat = function (id) {
    return new Promise(function (resolve, reject) {
        chatModel.findByIdAndRemove(id, function (err, chat) {
            if (err) {
                console.log('Error while deleting chat.');
                reject(err);
            } else {
                console.log('Chat deleted successfully.');
                resolve(chat);
            }
        });
    });
};


module.exports = { 'ChatController': new ChatController() }