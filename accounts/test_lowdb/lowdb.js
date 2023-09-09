// lowdb 简单了解一下，适合一些简单的数据保存，代替简单的数据库

const path = require('path')
// 导入 lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json') // 数据放入的文件

const db = low(adapter)  // 获取数据对象

// 初始化
// db.defaults({ posts: [], user: {} })
//     .write()

// 添加数据 后面添加
// db.get('posts')
//     .push({ id: 2, title: '今天天气不错' })
//     .write()

// 添加数据 前面添加
// db.get('posts')
//     .unshift({ id: 4, title: '今天天气不错' })
//     .write()

// 获取全部的数据
// console.log(db.get('posts').value());

// 获取单条数据
// let res = db.get('posts').find({ id: 1 }).value()
// console.log(res)
// 删除数据 类似pop弹出数据
// let res = db.get('posts').remove({ id: 3 }).write();
// console.log(res);

// 更新数据
db.get('posts').find({ id: 3 }).assign({ title: '今天下雨啦！！！' }).write()