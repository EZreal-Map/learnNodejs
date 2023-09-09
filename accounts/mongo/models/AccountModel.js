const mongoose = require('mongoose')
// 创建文档的结构对象
let AccountSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true // 设置必填项
    },
    time: {
        type: Date,
    },
    type: {
        type: Number,
        default: -1
    },
    account: Number,
    remarks: String
});
// 创建模型对象  对文档操作的封装对象  account 为集合collection名称
let AccountModel = mongoose.model('account', AccountSchema)

// 暴露模型对象
module.exports = AccountModel;