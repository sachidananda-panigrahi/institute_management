
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var userModel = require('../model/UsersModel');
var async = require("async");
var locals = {};

if(mongoose.connection.readyState=='no'){
    var connection = mongoose.connect('mongodb://localhost/institute_mgt_db');
}

function objectFindByKeyAndValue(collection, key, value){
    var len = collection.length;        
    for(var i = 0; i<len; i++){
        var item = collection[i];
        if(item[key] === value) return item;
    }
    return false;
};

function populateDB() {
    
    var allUsers = [
        {
            username: 'SuperAdmin',
            password: bcrypt.hashSync('test123', bcrypt.genSaltSync(8), null),
            role: 'superadmin',
            status: 'active',
            first_time_login: 0
        },
        {
            username: 'Admin',
            password: bcrypt.hashSync('test123', bcrypt.genSaltSync(8), null),
            role: 'admin',
            status: 'active',
            first_time_login: 0
        },
        {
            username: 'Employee',
            password: bcrypt.hashSync('test123', bcrypt.genSaltSync(8), null),
            role: 'user',
            status: 'active',
            first_time_login: 0
        },
        {
            username: 'Student',
            password: bcrypt.hashSync('test123', bcrypt.genSaltSync(8), null),
            role: 'user',
            status: 'active',
            first_time_login: 0
        }
    ];

    async.series([
        function(callback){
            userModel.find({}, function (err, users) {
                if (users) {
                    console.log('Users : ' + users.length);
                    if (users.length === 0) {
                        var allUsersLength = allUsers.length;                            
                        async.forEach(allUsers, function(eachUser, callback) {                    
                            var dummyUser = new userModel(eachUser); 
                            dummyUser.save(function (err, user) {
                                if(user.username=='SuperAdmin'){
                                    locals.user_id=user._id;                            
                                }          
                                console.log("User insertion Id: "+user._id);
                                callback();             
                            });
                        }, callback); 
                        
                    }else{                        
                        console.log(users.length + ' users exist.');                        
                        var resultObj = objectFindByKeyAndValue(users, 'role', 'superadmin');                                                                            
                        locals.user_id=resultObj    ._id;
                        callback(); 
                    }
                }
            }); 
        }
              
    ],function(err, results){ // optional callback         
       //console.log("Session: %j", locals);        
    }); 
         
}; 
module.exports = {'populateDB' : new populateDB()};