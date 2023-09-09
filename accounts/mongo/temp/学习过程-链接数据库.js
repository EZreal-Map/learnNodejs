// 1. 安装 mongoose
// 2. 导入 mongoose
const mongoose = require('mongoose')

// 3.连接 mongodb 服务
mongoose.connect('mongodb://127.0.0.1:27017/bilibili') // 如果bilibili不存在，会自动创建数据库

// 4.设置回调
// 设置连接成功的回调
mongoose.connection.once('open', () => {
    console.log("连接成功")
    // 5.创建文档的结构对象
    let BookSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true // 设置必填项
        },
        author: {
            type: String,
            default: '匿名' // 默认值
        },
        // gender: {
        //     type: String,
        //     enum: ['男', '女'] //设置的值必须是数组中的
        // },
        // ID: {
        //     type: String,
        //     unique: true, //设置唯一值，unique需要重建集合才能有效果 就是一开始建collection的时候就要加好unique
        // },

        price: Number
    });
    // 6.创建模型对象  对文档操作的封装对象  book 为集合collection名称
    let BookModel = mongoose.model('book', BookSchema)

    // 7.新增 最新版的使用then方法 create（）.then((err,data)=>{})
    BookModel.create({
        name: '西游记',
        author: '吴承恩',
        price: 19.9
    }).then((err, data) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log(data);
    })
});
// 设置连接错误的回调
mongoose.connection.on('error', () => {
    console.log("连接错误")
});
// 设置连接关闭的回调 
mongoose.connection.on('close', () => {
    console.log("连接关闭")
});

// 测试连接关闭的回调 关闭 mongodb的连接
// setTimeout(() => {
//     mongoose.disconnect();
// }, 2000)