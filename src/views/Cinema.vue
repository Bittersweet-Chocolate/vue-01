<template>
  <div>
    <!-- 通过key 让组件重新开始新的生命周期 -->
    <swiper :key="imglist.length"  ref="myswiper" perview="2" myclass="topSwiper" class="topSwiper">
      <template>
        <div class="swiper-slide" v-for="data in imglist" :key="data.id">
          <img :src="data.img | imgfilter(2)" class="transdata" />
        </div>
      </template>
    </swiper>
    <div class="center">
      <sidebar :name="['正在热映','即将上映']" :isfixed="fixed">
        <template #sidebar-a>
          <li v-for="data in datalist" :key="data.id" @click="handleLi(data.id)">
            <img :src="data.img | imgfilter" />
            <h3>{{data.nm}}</h3>
            <p>上映时间{{data.comingTitle}}</p>
            <p>{{data.wish}}人想看</p>
          </li>
        </template>

        <template #sidebar-b>
          <!-- <li v-for="data in datalist" :key="data.id">
          <img :src="data.img | imgfilter" />
          <h3>{{data.nm}}</h3>
          <p>上映时间{{data.comingTitle}}</p>
          <p>{{data.wish}}人想看</p>
          </li>-->
        </template>
      </sidebar>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import sidebar from "@/components/Sidebar";
import swiper from "@/views/cinema/swiper";
export default {
  data() {
    return {
      datalist: [],
      imglist: [],
      fixed: false
    };
  },
  created() {
    function getImgList() {
      return axios({
        method: "get",
        url:
          "/ajax/mostExpected?ci=1103&limit=10&offset=0&token=&optimus_uuid=FD51E5D0642211EAA1C65F23CC058A23BFF7169BC0884D7190CC4C784906C242&optimus_risk_level=71&optimus_code=10"
      });
    }
    function getDataList() {
      return axios({
        method: "get",
        url:
          "/ajax/mostExpected?ci=1103&limit=10&offset=0&token=&optimus_uuid=FD51E5D0642211EAA1C65F23CC058A23BFF7169BC0884D7190CC4C784906C242&optimus_risk_level=71&optimus_code=10"
      });
    }

    axios.all([getImgList(), getDataList()]).then(
      axios.spread((val, val2) => {
        this.imglist = val.data.coming;
        this.datalist = val2.data.coming;
      })
    );

    window.onscroll = this.handleScroll;
  },
  methods: {
    handleScroll() {
      //又tm是获取高度
      var scrollHeight = document.documentElement.scrollTop;
      var swiperHeight = this.$refs.myswiper.$el.offsetHeight;
      scrollHeight >= swiperHeight ? (this.fixed = true) : (this.fixed = false);
    },
    handleLi(id) {
      this.$router.push({ name: "Detail", params: { myid: id } });
    }
  },
  filters: {
    imgfilter(target, idx) {
      if (typeof idx !== "undefined") return target.replace("w.h", "200.200");
      return target.replace("w.h", "128.150");
    }
  },
  beforeDestroy() {
    window.onscroll = null;
  },
  components: {
    sidebar: sidebar,
    swiper: swiper
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