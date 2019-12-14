// import axios from 'axios'
const axios = require('axios')
//创建axios 实例
const instance = axios.create({
  baseURL:`http://${process.env.HOST||'localhost'}:${process.env.PORT||3000}`,
  timeout:2000,
  headers:{
  }
})

module.exports= instance
