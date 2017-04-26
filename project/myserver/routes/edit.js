/**
 * Created by JadonYuen on 2017/4/26.
 */
var express = require('express');
var router = express.Router();
var session = require('express-session');
var fs = require('fs');//fileStream
DATA_FILE_PATH = './public/data/';

ERROR_LOGIN_ERROR = {
    status : 0,
    msg : '尚未登录'
};

ERROR_READ_FILE = {
    status : 0,
    msg : '读取数据异常'
};

PARAM_ERR = {
    status : 0,
    msg : '请求类型异常'
};

router.get('/',function(req,res) {
    if(!session.user){
        return res.render('login',ERROR_LOGIN_ERROR);
    }
    var type = req.query.type;
    if(type){
        fs.readFile(DATA_FILE_PATH + type + ".json",function(err,data) {
            if(err){
                return res.send(ERROR_READ_FILE);
            }
            var obj = JSON.parse(data);
            return res.render('edit',{
                status : 1,
                data : obj,
                type : type,
                user : session.user
            });
        });
    }else{
        return res.send(PARAM_ERR);
    }

});

module.exports = router;