/**
 * Created by JadonYuen on 2017/5/24.
 * MongoDB 相关操作
 */

var mongoose = require('mongoose'); //mongoose 插件 操作 mongoDB
var config = require('config-lite')(__dirname); //config-list插件 操作config/default.js
var uuid = require('../util/UUID');

var connect = mongoose.createConnection(config.mongodb); //建立连接

const Schema = mongoose.Schema;  //使用mongoose的Schema

exports.User = connect.model('User',new Schema({
	uId : {type : String, default : uuid.guidGenerate()},
    username : {type : String},
    password : {type : String}
}),'user');  //exports一个 UserModel

// model方法 三个必备参数
// connect.model('为Model建立一个唯一名称',schema对象,'需要查询在mongoDB中的collectionName')


exports.Content = connect.model('Content',new Schema({
	cId : {type : String, default : uuid.guidGenerate()},
	title : {type : String},
	img : {type : String},
	url : {type : String},
	date : {type : Date , default : Date.now}
}),'content');
