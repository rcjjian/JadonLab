var express = require('express');
var router = express.Router();
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {

    if(!session.user) {//没有登录自动跳到登录页 login.ejs 登录后跳到index.ejs
        return res.render('login',{
            status : 0,
            msg : '尚未登录'
        });
    }else{
        return res.render('index',{
            status : 1,
            msg : '登录成功',
            user : session.user
        });
    }
});

router.get('/config',function(req,res) {

    if(!session.user) {//没有登录自动跳到登录页 login.ejs 登录后跳到index.ejs
        return res.render('login',{
            status : 0,
            msg : '尚未登录'
        });
    }else{
        return res.render('config',{
            status : 1,
            msg : '登录成功',
            user : session.user
        });
    }
});

module.exports = router;
