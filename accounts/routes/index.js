var express = require('express');
var router = express.Router();

const path = require('path')
// 导入 lowdb
// const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync')

// const adapter = new FileSync(path.resolve(__dirname + '/../data/db.json')) // 数据放入的文件

// const db = low(adapter)  // 获取lowdb数据对象
// 导入 shortid
// const shortid = require('shortid');

// 导入 moment 转换时间字符串
const moment = require('moment')
// 导入 自定义数据库 AccountModel对象
const AccountModel = require('../mongo/models/AccountModel')

// 记账本的列表

router.get('/account', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send("账本列表")

  // 获取所以的账单信息
  // let accounts = db.get('accounts').value();
  //读取所有
  AccountModel.find().sort({ time: -1 })
    .then((data) => {
      // if (err) {
      //   res.status(500).send('读取失败...')
      //   return;
      // }
      //输出 data 变量的值 
      // console.log(data[0].time);        // 修改bug
      // console.log(moment(data[0].time).format('YYYY-MM-DD'))
      // data = data.map((value) => {
      //   value.time = moment(value.time).format('YYYY-MM-DD')  // 也许value.time无法修改
      //   console.log(moment(value.time).format('YYYY-MM-DD'))
      //   console.log(value.time)
      //   return value
      // })
      res.render("list", { accounts: data, moment: moment })
    })
});

// 创建账本
router.get('/account/create', function (req, res, next) {
  // res.send("创建账本")
  res.render("create")
});

// 新增记录  注意这里的是post account路由
router.post('/message', (req, res) => {
  // 生成 id
  // let id = shortid.generate();
  // 获取请求体的数据
  // 修改 time 属性的值 把 "2023-09-09" -> moment对象 -> Date对象
  req.body.time = moment(req.body.time).toDate()
  console.log(req.body);
  // db.get('accounts').unshift({ id: id, ...req.body }).write()
  AccountModel.create(req.body).then((err, data) => {
    if (err) {
      console.log(err)
    }
    // 成功提醒
    // res.send('添加记录')
    res.render("success", { message: "添加成功哦~~~", url: "/account" })
  })




});

// 删除记录 
// 使用id作为唯一标识删除后端数据 
// 前端有2种传出id标识的方法，1：query方法 2：params方法
router.get('/message/:id', (req, res) => {
  // router.get('/account/:id', ...)：这行代码定义了一个路由，
  // 它会匹配以 /account/ 开头的URL路径，后面跟着一个动态的参数 :id。
  // 这个参数将作为路径中的一部分传递，并在后续的处理中被获取和使用。

  // 获取params 的 id 参数
  let id = req.params.id;
  // 删除
  // db.get('accounts').remove({ id: id }).write()
  AccountModel.findByIdAndRemove(id).then(data => {
    if (data) {
      res.render("success", { message: "删除成功", url: "/account" })
    }
  })

})

// 在 Express 中，可以使用 req.query 对象来获取查询字符串中的参数。例如：
// router.get('/account', (req, res) => {
//   let id = req.query.id;
//   let name = req.query.name;
//   // ...
// });

module.exports = router;
