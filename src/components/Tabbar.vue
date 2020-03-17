<template>
  <nav>
    <!-- 申明式导航 -->
    <ul>
      <router-link to="/center" tag="li" active-class="myactive">center</router-link>
      <router-link to="/film" tag="li" active-class="myactive">film</router-link>
      <router-link to="/cinema" tag="li" active-class="myactive">cinema</router-link>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
.myactive{
  color: red
}
nav{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: white;
  ul{
    display: flex;
    li{
      flex:1;
      line-height: 50px;
      text-align: center
    }
  }
}
</style>