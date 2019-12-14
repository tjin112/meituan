<template>
  <div class="slide">
    <el-carousel height="240px">
      <el-carousel-item v-for="(item,index) in list" :key="index" >
          <a :href="item.url" style="cursor:pointer">
          <img :src="item.img" alt="">
          </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
    data(){
        return{
            list:[{
                img:'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
                url:'http://baidu.com'
            },
            {
                img:'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png',
                url:'http://baidu.com'
            },
            {
                img:'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
                url:'http://baidu.com'
            },
            {
                img:'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
                url:'http://baidu.com'
            },
            {
                img:'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png',
                url:'http://baidu.com'
            }]
        }
    }
};
</script>
<style lang="scss">
</style>

