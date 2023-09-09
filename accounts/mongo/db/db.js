/**
 * 
 * @param {*} success 数据库连接成功的回调 
 * @param {*} error 数据库连接失败的回调
 */
module.exports = function (success, error) {
    if (!error) { error = () => { console.log("连接失败...") } }
    // 1. 安装 mongoose
    // 2. 导入 mongoose
    const mongoose = require('mongoose')
    const { DBHOST, DBPORT, DBNAME } = require('../config/config.js')
    // 3.连接 mongodb 服务
    // mongoose.connect('mongodb://127.0.0.1:27017/bilibili') // 如果bilibili不存在，会自动创建数据库
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)
    // 4.设置回调
    // 设置连接成功的回调
    mongoose.connection.once('open', () => {
        // console.log("连接成功")
        success();
    })
    // 设置连接错误的回调
    mongoose.connection.on('error', () => {
        // console.log("连接错误")
        error();
    });
    // 设置连接关闭的回调 
    mongoose.connection.on('close', () => {
        console.log("连接关闭")
    });

    // 测试连接关闭的回调 关闭 mongodb的连接
    // setTimeout(() => {
    //     mongoose.disconnect();
    // }, 2000)
}
