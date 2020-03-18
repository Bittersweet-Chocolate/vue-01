<template>
  <div class="cinema" :style="mystyle">
    <ul>
      <li v-for="data in cinemalist" :key="data.id">{{data.nm}}</li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      cinemalist: [],
      mystyle: {
        height: '0'
      }
    };
  },
  created() {
    axios({
      method: "get",
      url:
        "ajax/cinemaList?day=2020-03-17&offset=20&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=false&reqId=1584444689094&cityId=20&optimus_uuid=4079CF80683D11EA87348DDEB738E09EEB816D20D239455E8CD36F8F270070EE&optimus_risk_level=71&optimus_code=10"
    }).then(val => {
      this.cinemalist = val.data.cinemas;
      this.$nextTick(() => {
        new BetterScroll(".cinema", {
          scrollbar: {
            fade: true,
            interactive: false
          }
        });
      });
    });
    this.mystyle.height=document.documentElement.clientHeight-50+'px';
  },
  methods: {}
};
</script>
<style  scoped>
li {
  height: 50px;
}
.cinema {
  /* height: 600px; */
  overflow: hidden;
  position: relative;
}
</style>