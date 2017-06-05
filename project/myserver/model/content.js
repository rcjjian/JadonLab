var contentModel = require('../db/mongoDB').Content;


module.exports = {
	addContent : function(content,callBack) {
		contentModel.insert(content, function(err,result) {
			if(callBack)
				callBack(result);
		});
	},
 	
 	getContentList : function(pageIndex,pageSize,callBack) {
 		var query = contentModel.find();
 		query.skip(pageIndex);
 		query.limit(pageSize);
 		query.exec(function(err,result) {
 			if(callBack)
 				callBack(result);
 		});
 	},

 	getContentById : function(cId,callBack) {
 		contentModel.find({cId : cId},function(err,result) {
 			if(callBack)
 				callBack(result);
 		});
 	},

 	updateContent : function(content,callBack) {
 		contentModel.update
 	}
};