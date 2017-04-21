var express = require('express');
var router = express.Router();
var session = require('express-session');

router.get('/',function(req,res) {
	var name = req.param('username');
	var pwd = req.param('password');

	if(name === 'admin' && pwd === '123456'){
		session.user = {
			username : name,
			password : pwd
		}
		return res.send({
			status : 1,
			msg : '登录成功'
		});
	}else{
		return res.send({
			status : 0,
			msg : '登录失败'
		});
	}
});

module.exports = router;