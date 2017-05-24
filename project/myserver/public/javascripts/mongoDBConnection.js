var mongoose = require('mongoose');

var _instance;

var _modelMap;

class MongooseConnection{

	constructor() {
		if(_instance == null){
			_instance = this;
			this.registerModel();
		}
		return _instance;
	}

	registerModel() {
		this.setModel('user',{username:String,password:String});
	}

	getConnection() {
		return mongoose.connect('mongodb://localhost:27017/myDB');
	}

	setModel(collectionName,obj) {
		if(_modelMap == null)
			_modelMap = {};

		if(_modelMap[collectionName] == null){
			var Schema = mongoose.Schema;
			var schema = new Schema(obj);
			_modelMap[collectionName] = this.getConnection().model(collectionName,schema);
		}

	}

	getModel(collectionName) {

		if(!_modelMap)return null;

		else return _modelMap[collectionName];
	}

}

module.exports = MongooseConnection;
