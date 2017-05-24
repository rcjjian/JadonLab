/**
 * Created by JadonYuen on 2017/4/25.
 */
var express = require('express');
var router = express.Router();
var session = require('express-session');  //使用到session

var user = require('../model/user');  //引用操作user

router.post('/',function(req,res,next) {

    var name = req.body.username;
    var pwd = req.body.password;

    user.getLoginUser(req.body,function(err,doc) {  //点用user接口，将request.body传入（此时的request.body = {username:'admin'}）
        if(!err){
            if(doc){ //查询结果不为空，则查询成功
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
    });
});

module.exports = router;
