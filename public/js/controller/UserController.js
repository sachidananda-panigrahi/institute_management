// Dependencies
var mongoose = require('mongoose');
var userModel = require('../model/UsersModel');
var Promise = require('promise');

function UserController() {

}

UserController.prototype.getAllUsers = function () {
    return new Promise(function (resolve, reject) {
        userModel.find({}).lean().exec(function (err, users) {
            if (err) {
                console.log('Error fetching all users.');
                reject(err);
            } else {
                resolve(users);
            }
        })
    });
};

UserController.prototype.getUserbyId = function (userId) {
    return new Promise(function (resolve, reject) {
        userModel.find({ _id: userId }).lean().exec(function (err, users) {
            if (err) {
                console.log('Error fetching user by Id.');
                reject(err);
            } else {
                resolve(users);
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

UserController.prototype.editUser = function (id, user) {
    return new Promise(function (resolve, reject) {
        userModel.update({ _id: id }, user, { upsert: false }, function (err, numOfRows, users) {
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



module.exports = { 'UserController': new UserController() }