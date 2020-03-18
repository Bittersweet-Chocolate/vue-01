<template>
  <div id="app">
    <!-- 路由容器 -->
    <router-view />
    <tabbar v-if="isTabbarShow"></tabbar>
  </div>
</template>
<script>
import tabbar from "./components/Tabbar";
import { mapState } from 'vuex'
// import bus from "@/bus/index";
// 全局组件写法
// import Vue from 'vue'
// Vue.component("navbar",navbar)
// Vue.component("sidebar",sidebar)
export default {
  data() {
    return {
      // isShow: true,
      datalist: []
    };
  },
  created() {
    //vuex
    // this.$store.state.isTabbarShow = true;
    // console.log(this.$store.state.isTabbarShow);
    // this.$store.commit("HideMaizouTabbar", true);

    // 中央事件总线
    // bus.$on("isTabbarShow", value => {
    //   this.isShow = value;
    // });
  },
  components: {
    tabbar: tabbar
  },
  computed:{
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState(['isTabbarShow'])
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
html {
  height: 100%;
}
</style>
