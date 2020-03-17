<template>
  <div>
    <swiper :key="imglist.length" ref="myswiper" perview="3" myclass="topSwiper" class="topSwiper">
      <template>
        <div class="swiper-slide" v-for="data in imglist" :key="data.id">
          <img :src="data.img | imgfilter(2)" class="transdata" />
        </div>
      </template>
    </swiper>
    <div :class="{'fixed':isFixed}" class="table">
      <router-link to="/film/nowplaying" tag="p" active-class="chooseP" >正在热映</router-link>
      <router-link to="/film/comingsoon" tag="p" active-class="chooseP">即将上映</router-link>
    </div>
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>
<script>
import axios from "axios";
import swiper from "@/views/cinema/swiper";
export default {
  data() {
    return {
      imglist: [],
      isFixed:false,
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

    axios.all([getImgList()]).then(
      axios.spread((val, val2) => {
        this.imglist = val.data.coming;
      })
    );

    window.onscroll = this.handleScroll;
  },
  methods: {
    handleScroll() {
      //又tm是获取高度
      var scrollHeight = document.documentElement.scrollTop;
      var swiperHeight = this.$refs.myswiper.$el.offsetHeight;
      scrollHeight >= swiperHeight ? (this.isFixed = true) : (this.isFixed = false);
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
    swiper: swiper
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
  background: white;
}
</style>