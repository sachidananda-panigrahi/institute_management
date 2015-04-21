var LocalStrategy   = require('passport-local').Strategy;
var mongoose = require('mongoose');
var CONSTANT = require('../utilities/Constant').CONSTANTS;
var User = mongoose.model(CONSTANT.DOCUMENT_NAMES.USER);
var bCrypt = require('bcrypt-nodejs');
//    console.log('Total Users : ' + users.length);
//});
module.exports = function(passport){
    // console.log("passport")
    // console.log(passport)
	passport.use('login', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback : true
        },
        function(req, username, password, done) { 
            // console.log("username")
            // console.log(username)
            // check in mongo if a user with username exists or not
            User.findOne({ 'email' :  username }, 
                function(err, user) {
                    // console.log("user")
                    // console.log(user)
                    // In case of any error, return using the done method                    
                    
                    if (err)
                        return done(err);
                        
                    // Username does not exist, log the error and redirect back
                    if (!user){                        
                        return done(null, false, req.flash('loginMessage', 'Invalid username and/or password.'));                 
                    }
                    // User exists but wrong password, log the error 
                    if (!isValidPassword(user, password)){                        
                        return done(null, false, req.flash('loginMessage', 'Invalid username and/or password.')); // redirect back to login page
                    }
                    // User and password both match, return user from done method
                    // which will be treated like success
                    return done(null, user);
                }
            );

        })
    );


    var isValidPassword = function(user, password){        
        return bCrypt.compareSync(password, user.password);
    }
    // Password: bcrypt.hashSync('test123', bcrypt.genSaltSync(8), null),
}