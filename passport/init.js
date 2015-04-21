var login = require(__dirname+'/login');
var mongoose = require('mongoose');
var User = mongoose.model('users');

module.exports = function(passport){
    // console.log("passport")
    // console.log(passport)
	// Passport needs to be able to serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function(user, done) {
        // console.log('serializing user: ');
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {            
            done(err, user);
        });
    });

    // Setting up Passport Strategies for Login.
    login(passport); 
}