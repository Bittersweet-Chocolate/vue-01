<template>
  <div v-if="details !==null">detail--{{myid}}</div>
</template>
<script>
import bus from "@/bus/index";
export default {
  data() {
    return {
      // myid: 0,
      details: {}
    };
  },
  props: ["myid"],
  created() {
    this.$store.commit("HideMaizouTabbar", false);
    // this.$store.state.isTabbarShow = false;

    // 事件总线
    // bus.$emit("isTabbarShow", false);
  },
  beforeDestroy() {
    this.$store.commit("ShowMaizouTabbar", true);
    // this.$store.state.isTabbarShow = true;

     // 事件总线
    // bus.$emit("isTabbarShow", true);
  }
};
</script>