var express = require('express');
var router = express.Router();
var session = require('express-session');
var fs = require('fs');//fileStream
var content = require('../model/content');

ERROR_TYPE = {
	status : 0,
	msg : '数据类型异常'
};

ERROR_WRITE_DATA = {
	status : 0,
	msg : '数据输入不全'
};

ERROR_READ_FILE = {
	status : 0,
	msg : '读取数据异常'
};

ERROR_WRITE_FILE = {
	status : 0,
	msg : '写入数据异常'
};

ERROR_LOGIN_ERROR = {
	status : 0,
	msg : '尚未登录'
};


FILE_COUNT_MAX_LIMIT = 50; //读取数据时 只返回前50条数据


router.post('/write', function(req, res) {

	if(!session.user){
		return res.render('login',ERROR_LOGIN_ERROR);
	}
	var type = req.body.type;
	if(checkType(type,res)){

		if(checkWriteData(req,res)){
			fs.readFile(DATA_FILE_PATH + type + ".json",function(err,data){
				if(err){
					return res.send(ERROR_READ_FILE);
				}
				var list = null;
				try{
					list = JSON.parse(data);
				}catch(e){
					list = [];
				}
				var obj = {
					id : guidGenerate(),
                    title : req.body.title,
					img : req.body.img,
					url : req.body.url,
					time : new Date()
				};
				//将数据塞入
				list.splice(0,0,obj);
				var newData = JSON.stringify(list); //将数组转换为 json格式数据
				fs.writeFile(DATA_FILE_PATH + type + ".json", newData ,function(err){
					if(err){
						return res.send(ERROR_WRITE_FILE);
					}
					return res.send({
						status : 1,
						data : obj
					});
				});
			});
		}
	}
});

//写主页信息
router.post('/write_config', function(req,res) {
    if(!session.user){
        return res.render('login',ERROR_LOGIN_ERROR);
    }
    var data = req.body.data;

    var obj = JSON.parse(data);
    var newData = JSON.stringify(obj);
    fs.writeFile(DATA_FILE_PATH + "config.json",newData,function(err) {
        if(err){
            return res.send(ERROR_WRITE_FILE);
        }
        return res.send({
            status : 1,
            data : obj
        });
    });
});

router.get('/read',function(req,res) {
	var type = req.body.type;
    console.log(type);
	if(checkType(type,res)){
		fs.readFile(DATA_FILE_PATH + type + '.json',function(err,data) {
			if(err){
				return res.send(ERROR_READ_FILE);
			}
			var readList = null;
			try{
				readList = JSON.parse(data);
			}catch(e){
				readList = [];
			}
			if(readList.length > FILE_COUNT_MAX_LIMIT){
				readList = readList.slice(0,FILE_COUNT_MAX_LIMIT - 1);//返回50条数据
			}

			return res.send({
				status : 1,
				data : readList
			});
		})
	}
});

var checkType = function(type,res) {
	if(type == undefined){
		res.send(ERROR_TYPE);
		return false;
	}else{
		return true;
	}
};

var checkWriteData = function(req,res) {
	var title = req.body.title;
	var img = req.body.img;
	var url = req.body.url;

	if(title == undefined || img == undefined || url == undefined){
		res.send(ERROR_WRITE_DATA);
		return false;
	}
	return true;
};

module.exports = router;