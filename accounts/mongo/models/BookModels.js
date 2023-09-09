const mongoose = require('mongoose')
// 创建文档的结构对象
let BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // 设置必填项
    },
    author: {
        type: String,
        default: '匿名' // 默认值
    },
    price: Number
});
// 创建模型对象  对文档操作的封装对象  book 为集合collection名称
let BookModel = mongoose.model('book', BookSchema)

// 暴露模型对象
module.exports = BookModel;