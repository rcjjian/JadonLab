/**
 * Created by JadonYuen on 2017/5/24.
 * User collection 的操作
 */
var userModel = require('../db/mongoDB').User; //引入 model

module.exports = {

    getLoginUser : function(user,callBack) {  //提供外部调用的查询接口
        userModel.findOne(user,callBack);  //user为一个查询的对象，callback回调函数
    }                                      //user = {username : '',password:''}
};
