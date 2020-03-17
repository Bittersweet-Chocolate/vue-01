<template>
  <div id="app">
    <!-- 路由容器 -->
    <router-view />
    <tabbar></tabbar>
  </div>
</template>
<script>
import tabbar from "./components/Tabbar";
// 全局组件写法
// import Vue from 'vue'
// Vue.component("navbar",navbar)
// Vue.component("sidebar",sidebar)
export default {
  data() {
    return {
      isShow: true,
      datalist: []
    };
  },
  methods: {},

  components: {
    tabbar: tabbar
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
