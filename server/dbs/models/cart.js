const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Cart = new Schema({
  id: {
    type: String,
    require: true //必须项
  },
  detail: { // 单价数量商品名称等
    type: Array,
    require: true
  },
  cartNo: {//购物车本身
    type: String,
    require: true
  },
  user: { // 用户与用户 强行关联
    type: String,
    require: true
  },
  time: { //跟踪购物车什么时候创建
    type: String,
    require: true
  }
})

// export default mongoose.model('Cart', Cart)

module.exports = mongoose.model('Cart', Cart)
