// import Router from 'koa-router';
// import axios from './utils/axios'
// import sign from './utils/sign'
// import Province from '../dbs/models/province'
const Router = require("koa-router");
const axios = require("./utils/axios");
// const Province = require("../dbs/models/province");
const sign = require("./utils/sign");

let router = new Router({ prefix: "/categroy" });

// const sign = "015b6d5340fb68d548384f5f9a3fb2e0";

router.get("/crumbs", async ctx => {
  console.log(1);
  try {
    let {
      status,
      data: { areas, types }
    } = await axios.get(`http://117.51.155.165/categroy/crumbs`, {
      params: {
        city: ctx.query.city.replace("市", "") || "北京",
        sign
      }
    });
    ctx.body = {
      areas: status === 200 ? areas : [],
      types: status === 200 ? types : []
    };
    console.log(ctx.query.city+'随便打印')
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
