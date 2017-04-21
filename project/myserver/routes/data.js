var express = require('express');
var router = express.Router();
var fs = require('fs');//fileStream

DATA_FILE_PATH = './public/data/';

ERROR_TYPE = {
	result : 0,
	msg : '数据类型异常'
};

ERROR_WRITE_DATA = {
	result : 0,
	msg : '数据输入不全'
};

ERROR_READ_FILE = {
	result : 0,
	msg : '读取数据异常'
};

ERROR_WRITE_FILE = {
	result : 0,
	msg : '写入数据异常'
};

SUCCESS_WRITE_FILE = {
	result : 1,
	msg : '写入数据成功'
};

FILE_COUNT_MAX_LIMIT = 50; //读取数据时 只返回前50条数据


router.get('/write', function(req, res) {
	var type = req.param('type');
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
					titile : req.param('title'),
					img : req.param('img'),
					url : req.param('url'),
					date : new Data()
				};
				//将数据塞入
				list.splice(0,0,obj);
				var newData = JSON.stringify(list); //将数组转换为 json格式数据
				fs.writeFile(DATA_FILE_PATH + type + ".json", newData ,function(err){
					if(err){
						return res.send(ERROR_WRITE_FILE);
					}
					return res.send(SUCCESS_WRITE_FILE);
				});
			});
		}
	}
});

router.get('/read',function(req,res) {
	var type = req.param('type');
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
				result : 1,
				data : readList;
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
}

var checkWriteData = function(req,res) {
	var title = req.param('title');
	var img = req.param('img');
	var url = req.param('url');

	if(title == undefined || img == undefined || url == undefined){
		res.send(ERROR_WRITE_DATA);
		return false;
	}
	return true;
}

//guid
function guidGenerate() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  }).toUpperCase();
}


module.exports = router;
