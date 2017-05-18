var mongoose = require('mongoose');

class mongooseConnection{

	 
	constructor() {
	}

	getConnection() {


		if(this.dbConnection == null)
			this.dbConnection = mongoose.connect('mongodb://localhost:27017/myDB');
		return this.dbConnection;
	}

	getModel(collectionName,obj) {
		var Schema = mongoose.Schema;
		var schema = new Schema(obj);
		return this.getConnection().model(collectionName,schema);
	}

}

module.exports = mongooseConnection;
