<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in $store.state.home.menu" :key="index" @mouseenter="enter">
        <i :class="item.type"/>
        {{item.name}}
        <span class="arrow"/>
      </dd>
    </dl>
    <div class="detail" v-if="kind" @mouseenter="sover" @mouseleave="sout">
      <template v-for="(item,index) in curdetail.child">
        <!-- 模块循环 -->
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="v in item.child" :key="v">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: "",
      menu: []
    };
  },
  computed: {
    curdetail: function() { 
        // console.log(this. $store.state.home.menu.filter((item)=>item.type===this.kind)[0])
      return this. $store.state.home.menu.filter((item)=>item.type===this.kind)[0]
    }
  },
  methods:{
      mouseleave:function(){
          let self=this
            console.log(self) 
          self._timer=setTimeout(function(){
              self.kind=''
          },150)
          
      },
      enter:function(e){
          this.kind=e.target.querySelector('i').className
          console.log(this.kind) 
      },
      sover:function(){
          clearTimeout(this._timer)
      },
      sout:function(){
          this.kind=''
      }
  }
};
</script>
