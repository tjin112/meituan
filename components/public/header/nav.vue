<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <nuxt-link to="/my">我的美团</nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="/order">我的订单</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/order">我的收藏</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/order">抵用卷</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/order">账户设置</nuxt-link>
          </dd>
        </dl>
      </li>
      <li>
        <nuxt-link to="/order">手机APP</nuxt-link>
      </li>
      <li class="list bd">
        <nuxt-link to="center">商家中心</nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="/order">登陆商家中心</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/order">我想合作</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/order">免费手机开店</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/order">商家申请开票</nuxt-link>
          </dd>
        </dl>
      </li>
      <li class="list site">
        <nuxt-link to="site">网站导航</nuxt-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd>烤魚</dd>
            <dd>特色小吃</dd>
            <dd>烤魚</dd>
            <dd>特色小吃</dd>
            <dd>烤魚</dd>
            <dd>特色小吃</dd>
          </dl>
          <dl class="movie">
            <dt>看電影</dt>
            <dd>熱映電影</dd>
            <dd>熱映電影</dd>
            <dd>熱映電影</dd>
            <dd>熱映電影</dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <a href="#">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" alt>
              </a>
            </dd>
            <dd>
              <a href="#">
                <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" alt>
              </a>
            </dd>
            <dd>
              <a href="#">
                <img src="//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png" alt>
              </a>
            </dd>
            <dd>
              <a href="#">
                <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" alt>
              </a>
            </dd>
            <dd>
              <a href="#">
                <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" alt>
              </a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
@import "@/assets/css/public/header/topbar.scss";
</style>
