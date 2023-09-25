<template>
  <div class="aaa">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide>
        <img src="../../assets/images/logo.png" alt="" class="banner" style="width: 100%;height: 300px">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/images/broadband-bg.png" alt="" class="banner" style="width: 100%;height: 300px">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/images/logo.png" alt="" class="banner" style="width: 100%;height: 300px">
      </swiper-slide>
      <swiper-slide>
        <img src="../../assets/images/5g++.png" alt="" class="banner" style="width: 100%;height: 300px">
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
      <div slot="button-prev" class="swiper-button-prev swiper-button-white" />
      <div slot="button-next" class="swiper-button-next swiper-button-white" />
    </swiper>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
export default {
  name: 'Homepage',
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        loop: true,
        // 初始索引
        initalSlide: 0,
        // 自动播放
        autoplay: true,
        // 切换效果
        effect: 'effect',
        speed: 800,
        direction: 'horizontal',
        // 左右点击
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // 分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        swiperSlides: [1, 2, 3]
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.aaa{
  background-color: #5b9bd5;
}
</style>

