// Dependencies
var passport = require('passport'),
    userController = require('../controller/userController').UserController,
    CONSTANT = require('../utilities/Constant').CONSTANTS,
    bCrypt = require('bcrypt-nodejs')
locals = {};


module.exports.login = function (req, res) {
    res.render('login', {message: req.flash('loginMessage'), pagetitle: 'Login', passchange: req.flash('passchange')});
};

module.exports.logout = function (req, res) {
    req.logout();
    res.redirect('/');
};

module.exports.loginMethod = passport.authenticate('login', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
    failureFlash: 'Invalid username or password.'
});
/*=======================Dash Board Starts==================================*/
module.exports.adminDashboard = function(req, res){
    locals.new_members = 0;
    locals.userDetail = req.user;
    locals.userDetail.activeTab = "Dashboard";
    var fs   = require('fs-extra');
    // console.log(req.user);

    function renderDashboardData(){
        this.getAllUsers();
    }

    renderDashboardData.prototype.getAllUsers = function(){
        var that = this;
        userController.getAllUsers().done(function (users) {
            if(users){
                // console.log(users);
                for (var index in users) {
                    if(new Date(users[index].created_at).getMonth() == new Date().getMonth()){
                        locals.new_members ++;
                        // console.log(locals.new_members)
                    }
                }
            }
            that.getAllChat();
        });
    };

    renderDashboardData.prototype.getAllChat = function(){
        var that = this;
        var chatController = require('../controller/ChatController').ChatController;
        chatController.getAllChat().done(function(chats){
            // console.log(chats);
            locals.chats = chats;
            that.base64ToImageFile(that);

        });
    };

    renderDashboardData.prototype.base64ToImageFile = function(that){
        var buff = new Buffer(req.user.profile_pic
            .replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64');
        fs.writeFile('public/images/user/user_profile.jpg', buff, function (err) {
            // console.log(locals.userDetail.profile_pic_url);
            that.getLimitedUser(8);
        });
    };

    renderDashboardData.prototype.getLimitedUser = function(limit){
        userController.getUserByLimit(limit).done(function (users) {
            if(users){
//                console.log(users);
                locals.allUsers = users;
                res.render('dashboard', locals);
            }
        });
    };


    var renderDashboardData= new renderDashboardData();
};
/*=======================Dash Board Ends==================================*/
module.exports.studentSignup = function(req, res){
    locals.months = CONSTANT.MONTHS;
    res.render('signup', locals);
};
/*=======================Store Chat Starts==================================*/
module.exports.chat = function(data){
    var chatController = require('../controller/ChatController').ChatController;
    var chatDet = {};
    chatDet.user_name = data.userName;
    chatDet.msg_content = data.message;
    chatDet.profile_pic_url = data.profile_pic_url;
    chatDet.msg_time = data.time;

    chatController.addChat(chatDet).done(function(chat){
        // console.log('inside chatController');
        // console.log(chat);
    });
};
/*=======================Store Chat Ends==================================*/

module.exports.user = function (req, res) {
    userController.getAllUsers().done(function (users) {
        // console.log(users[0]);
        res.send(users);
    });
};
module.exports.userpresent = function (req, res) {
    // console.log(req.body.email);
    userController.getUserByEmailId(req.body.email).done(function (user) {
        if(user){
            res.send(false);
        }else{
            res.send(true);
        }

    });
};
/*=======================Add New User Start ==================================*/
module.exports.addNewUser = function(req, res){
    // Dependencies
    var formidable = require('formidable'),
        util = require('util'),
        fs   = require('fs-extra'),
        qt   = require('quickthumb');

    var form = new formidable.IncomingForm();
    var fieldsObj = {};
    form.parse(req, function(err, fields, files) {
        fieldsObj = fields;
        // console.log(files)
    });

    form.on('end', function(fields, files) {

        // Temporary location of our uploaded file 
        var temp_path = this.openedFiles[0].path;
        // The file name of the uploaded file 
        var file_name = this.openedFiles[0].name;
        // Location where we want to copy the uploaded file 
        var new_location = 'public/uploads/';

        var image_origial = new_location+file_name;
        fs.copy(temp_path, image_origial, function(err) {
            if (err) {
                console.error(err);
            } else {
                fs.readFile(image_origial, function(err, data) {
                    var base64data = new Buffer(data).toString('base64');
                    var buff = new Buffer(base64data
                        .replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64');
                    var path = 'images/user/'+fieldsObj.firstname+'_'+fieldsObj.email+'.jpg';
                    fs.writeFile('public/'+path, buff, function (err) {
                        if(err){
                            console.log(err);
                        }else{
                            var createUser = {
                                firstname: fieldsObj.firstname,
                                lastname: fieldsObj.lastname,
                                email: fieldsObj.email,
                                mobile: fieldsObj.mobile,
                                city: fieldsObj.city,
                                state: fieldsObj.state,
                                mother_tongue: fieldsObj.mother_tongue,
                                nationality: fieldsObj.nationality,
                                password: bCrypt.hashSync(fieldsObj.password, bCrypt.genSaltSync(8), null),
                                birthdate: new Date(parseInt(fieldsObj.year), parseInt(fieldsObj.month)-1, parseInt(fieldsObj.day), 12, 00, 00),
                                gender: fieldsObj.gender,
                                created_at: new Date(),
                                profile_pic: "data:image/png;base64, " + base64data,
                                profile_pic_url: path,
                                status: 'active'
                            };

                            userController.addUser(createUser).done(function (user) {
                                if(user){
                                    // console.log(user);
                                    res.redirect('/');
                                }
                            });
                        }
                    });

                });


            }
        });
    });

    /*var userDetail = {};

     for(var index in req.body){
     userDetail[req.body[index].name] = req.body[index].value;
     }*/
//    console.log(userDetail);

};
/*=======================Add New User Ends==================================*/

/*=======================User Profile ==================================*/
module.exports.userprofile = function (req, res) {
    locals.userDetail.activeTab = "Profile";
    res.render('user_profile', locals);
};
/*=======================User Profile Ends==================================*/