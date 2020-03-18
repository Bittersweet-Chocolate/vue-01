<template>
  <div style="padding-bottom:50px">
    <ul>
      <li v-for="data in datalist" :key="data.id" @click="handleLi(data.id)">
        <img :src="data.img | imgfilter" />
        <h3>{{data.nm}}</h3>
        <p>上映时间{{data.comingTitle}}</p>
        <p>{{data.wish}}人想看</p>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import sidebar from "@/components/Sidebar";
import swiper from "@/views/films/swiper";
export default {
  data() {
    return {
      datalist: [],
      fixed: false,
      myHeight: {
        height: 0
      }
    };
  },
  created() {
    function getDataList() {
      return axios({
        method: "get",
        url:
          "/ajax/mostExpected?ci=1103&limit=10&offset=0&token=&optimus_uuid=FD51E5D0642211EAA1C65F23CC058A23BFF7169BC0884D7190CC4C784906C242&optimus_risk_level=71&optimus_code=10"
      });
    }

    axios.all([getDataList()]).then(
      axios.spread(val2 => {
        this.datalist = val2.data.coming;
      })
    );
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
<style  scoped>
li {
  padding: 10px;
  overflow: hidden;
}
img {
  float: left;
}
</style>