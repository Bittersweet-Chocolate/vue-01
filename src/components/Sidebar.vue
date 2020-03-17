<template>
  <div>
    <div :class="{'table':true,'fixed':isfixed}">
      <p @click="isShow=true" :class="{'chooseP':isShow}">{{name[0]}}</p>
      <p @click="isShow=false" :class="{'chooseP':!isShow}">{{name[1]}}</p>
    </div>
    <ul>
      <slot name="sidebar-a" v-if="isShow===true"></slot>
      <slot name="sidebar-b" v-else></slot>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true
    };
  },
  props: ["name","isfixed"]
};
</script>
<style lang="scss" scoped>
.table {
  display: flex;
  p {
    flex: 1;
    text-align: center;
  }
}
.chooseP {
  color: chocolate;
}
.fixed {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 40px;
  background: white
}
</style>