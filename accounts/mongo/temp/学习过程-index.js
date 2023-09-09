const mongoose = require('mongoose')
// 导入 db 连接 
const db = require('../db/db')
// 导入 BookModel
const BookModel = require('../models/BookModels')
db(() => {
    console.log("连接成功...")
    BookModel.create({
        name: "西游记",
        author: "吴承恩",
        price: 29.9
    });

})
// 4.设置回调
// 设置连接成功的回调
// mongoose.connection.once('open', () => {
//     console.log("连接成功")
//     // 5.创建文档的结构对象
//     let BookSchema = new mongoose.Schema({
//         name: {
//             type: String,
//             required: true // 设置必填项
//         },
//         author: {
//             type: String,
//             default: '匿名' // 默认值
//         },
//         // gender: {
//         //     type: String,
//         //     enum: ['男', '女'] //设置的值必须是数组中的
//         // },
//         // ID: {
//         //     type: String,
//         //     unique: true, //设置唯一值，unique需要重建集合才能有效果 就是一开始建collection的时候就要加好unique
//         // },

//         price: Number
//     });
//     // 6.创建模型对象  对文档操作的封装对象  book 为集合collection名称
//     let BookModel = mongoose.model('book', BookSchema)

//     // 7.新增 最新版的使用then方法 create（）.then((err,data)=>{})
//     BookModel.create({
//         name: '西游记',
//         author: '吴承恩',
//         price: 19.9
//     }).then((err, data) => {
//         if (err) {
//             console.log(err)
//             return;
//         }
//         console.log(data);
//     })
// });
