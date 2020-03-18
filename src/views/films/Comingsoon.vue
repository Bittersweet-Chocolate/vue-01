<template>
  <div style="padding-bottom:50px">
    <ul>
      <li v-for="data in $store.state.comingList" :key="data.id" @click="handleLi(data.id)">
        <img :src="data.img | imgfilter" />
        <h3>{{data.nm}}</h3>
        <p>上映时间{{data.comingTitle}}</p>
        <p>{{data.wish}}人想看</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  mounted() {
    const stores = this.$store;
    if (stores.state.comingList.length === 0) {
      stores.dispatch("getComingListAction");
      console.log(stores.state.comingList);
    }
  },
  methods: {
    handleLi(id) {
      this.$router.push({ name: "Detail", params: { myid: id } });
    }
  },
  filters: {
    imgfilter(target, idx) {
      if (typeof idx !== "undefined") return target.replace("w.h", "200.200");
      return target.replace("w.h", "128.130");
    }
  }
};
</script>
<style lang="scss" scoped>
li {
  padding: 10px;
  overflow: hidden;
}
img {
  float: left;
}
</style>