// import Router from 'koa-router';
// import axios from './utils/axios'
// import Poi from '../dbs/models/poi'
// import sign from './utils/sign'
const Router = require('koa-router')
const axios = require('./utils/axios')
let router = new Router({prefix: '/search'})

const sign = 'a59e9d4ec243f11ac724d98ed4c01ac5'
router.get('/top', async (ctx) => {
  let {status, data: {
      top
    }} = await axios.get(`http://117.51.155.165/search/top`, {
    params: {
      input: ctx.query.input,
      city: ctx.query.city,
      sign
    }
  })
  ctx.body = {
    top: status === 200
      ? top
      : []
  }
})

router.get('/hotPlace', async (ctx) => {
  let city = ctx.store
    ? ctx.store.geo.position.city
    : ctx.query.city
    console.log(ctx.store,city)
  let {status, data: {
      result
    }} = await axios.get(`http://117.51.155.165/search/hotPlace`, {
    params: {
      sign,
      city
    }
  })
  //返回结果
  ctx.body = {
    result: status === 200
      ? result
      : []
  }
  console.log(this.data)
})

router.get('/resultsByKeywords', async (ctx) => {
  const {city, keyword} = ctx.query;
  let {
    status,
    data: {
      count,
      pois
    }
  } = await axios.get('http://117.51.155.165/search/resultsByKeywords', {
    params: {
      city,
      keyword,
      sign
    }
  })
  ctx.body = {
    count: status === 200 ? count : 0,
    pois: status === 200
      ? pois
      : []
     
  }

})

router.get('/products', async (ctx) => {
  let keyword = ctx.query.keyword || '旅游'
  let city = ctx.query.city || '北京'
  let {
    status,
    data: {
      product,
      more
    }
  } = await axios.get('http://117.51.155.165/search/products', {
    params: {
      keyword,
      city,
      sign
    }
  })
  if (status === 200) {
    ctx.body = {
      product,
      more: ctx.isAuthenticated() ? more: [],
      login: ctx.isAuthenticated()
    }
  }else{
    ctx.body = {
      product: {},
      more: ctx.isAuthenticated() ? more: [], //判断是否登陆
      login: ctx.isAuthenticated()
    }
  }
  // console.log( ctx.query)
})

module.exports= router
