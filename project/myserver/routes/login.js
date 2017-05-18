/**
 * Created by JadonYuen on 2017/4/25.
 */
var express = require('express');
var router = express.Router();
var session = require('express-session');

var MongoDBConnect = require('../public/javascripts/mongoDBConnection');

router.post('/',function(req,res,next) {

    var name = req.body.username;
    var pwd = req.body.password;

    var myMongoDBConnect = new MongoDBConnect();
    var userModle = myMongoDBConnect.getModel("user",{username:String,password:String});
    var query = {
        username : name,
        password : pwd
    };
    userModle.count(function(err,doc) {
        console.log(err + "~~~~");
        if(!err){
            if(doc == 1){
                session.user = {
                    username : name,
                    password : pwd
                };
                return res.send({  //返回json格式数据
                    status : 1,
                    msg : '登录成功',
                    user : session.user
                });
            }else{
                return res.send({
                    status : 0,
                    msg : '登录失败'
                });
            }
        }
    },query);

});

module.exports = router;
