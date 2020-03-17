<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  props:["perview","myclass"],
  mounted() {
    new Swiper("."+this.myclass, {
      slidesPerView: this.perview,
      speed: 1000,
      autoplay: {
        delay: 3000
      },
      loop: true
    });
  }
};
</script>
<style lang="scss" scoped>
.swiper-warpper{
  img{
    width: 100%;
  }
}
</style>