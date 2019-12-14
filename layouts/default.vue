<template>
  <el-container class="layout-default">
    <el-header style="height:100%">
      <Myheader/>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer style="height：100%">
      <MyFooter/>
    </el-footer>
  </el-container>
</template>
<script>
import Myheader from "~/components/public/header/index";
import MyFooter from "~/components/public/footer/index";
export default {
  components: {
    Myheader,
    MyFooter
  }
};
</script>


