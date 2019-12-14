<template>
   <div class="m-geo"> 
       <!-- store 是vuex的实例 state固定用法获取状态 geo为模块名称 position是模块下的变量 city是position的属性 -->
       <i class="icon-location"/>{{$store.state.geo.position.city}}
                                
       <nuxt-link class="changeCity" to="/changeCity">切换城市</nuxt-link>
       [香河 廊坊 天津]
   </div>
</template>

<script>
export default {
    data(){
        return{
            city:''
        }
    }
}
</script>
<style>

</style>
