// Dependencies
var mongoose = require('mongoose');
var userModel = require('../models/UsersModel');
var Promise = require('promise');

function UserController() {

}

UserController.prototype.getAllUsers = function (userId) {
    return new Promise(function (resolve, reject) {
        userModel.find({status:'active',_id: {'$ne': userId }}).lean().exec(function (err, users) {
            if (err) {
                console.log('Error fetching all users.');
                reject(err);
            } else {
                resolve(users);
            }
        })
    });
};

UserController.prototype.getUserById = function (userId) {
    return new Promise(function (resolve, reject) {
        userModel.findOne({ _id: userId }).lean().exec(function (err, user) {
            if (err) {
                console.log('Error fetching user by Id.');
                reject(err);
            } else {
                //console.log(user);
                resolve(user);
            }
        })
    });
};

UserController.prototype.getUserByName = function (userName) {
    return new Promise(function (resolve, reject) {
        userModel.findOne({ username: userName, status: 'active' }).lean().exec(function (err, users) {
            if (err) {
                console.log('Error fetching user by Name.');
                reject(err);
            } else {
                //console.log(users);
                resolve(users);
            }
        })
    });
};

UserController.prototype.getUserByEmailId = function (emailId) {
    return new Promise(function (resolve, reject) {
        userModel.findOne({ email: emailId }).lean().exec(function (err, user) {
            if (err) {
                console.log('Error fetching user by email.');
                reject(err);
            } else {
                //console.log(users);
                resolve(user);
            }
        })
    });
};

UserController.prototype.addUser = function (user) {
    return new Promise(function (resolve, reject) {
        var userDocument = new userModel(user);
        userDocument.save(function (err, users) {
            if (err) {
                console.log('Error while adding user.');
                reject(err);
            } else {
                console.log('User added successfully.');
                resolve(users);
            }
        })
    });
};

UserController.prototype.editUserByName = function (username, user) {
    return new Promise(function (resolve, reject) {
        userModel.update({ username: username }, user, { upsert: false }, function (err, numOfRows, users) {
            if (err) {
                console.log('Error while updating user.');
                reject(err);
            } else {
                console.log('User updated successfully.');
                resolve(users);
            }
        });
    });
};

UserController.prototype.deleteUser = function (id) {
    return new Promise(function (resolve, reject) {
        userModel.findByIdAndRemove(id, function (err, user) {
            if (err) {
                console.log('Error while deleting user.');
                reject(err);
            } else {
                console.log('User deleted successfully.');
                resolve(user);
            }
        });
    });
};

UserController.prototype.editUser = function (id, User) {
    return new Promise(function (resolve, reject) {
        userModel.update({ _id: id }, User, { upsert: false }, function (err, numOfRows, users) {
            if (err) {
                console.log('Error while updating User.');
                reject(err);
            } else {
                console.log('User updated successfully.');
                resolve(users);
            }
        });
    });
};

UserController.prototype.getUserByLimit = function (limit) {
    return new Promise(function (resolve, reject) {
        userModel.find().sort({_id:1}).limit(limit).lean().exec(function (err, users) {
            if (err) {
                console.log('Error fetching all users.');
                reject(err);
            } else {
                resolve(users);
            }
        })
    });
};

module.exports = { 'UserController': new UserController() };