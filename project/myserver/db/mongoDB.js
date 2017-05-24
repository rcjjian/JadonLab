/**
 * Created by JadonYuen on 2017/5/24.
 * MongoDB 相关操作
 */

var mongoose = require('mongoose'); //mongoose 插件 操作 mongoDB
var config = require('config-lite')(__dirname); //config-list插件 操作config/default.js

var connect = mongoose.createConnection(config.mongodb); //建立连接

const Schema = mongoose.Schema;  //使用mongoose的Schema

exports.User = connect.model('User',new Schema({
    username : String,
    password : String
}),'user');  //exports一个 UserModel

// model方法 三个必备参数
// connect.model('为Model建立一个唯一名称',schema对象,'需要查询在mongoDB中的collectionName')



