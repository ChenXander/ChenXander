<template>
  <!-- 头部区域及轮播图 -->
  <header class="my_header">
    <div class="header_title">
      <h1>THREE KIM</h1>
      <p>Cease to struggle and you cease to live</p>
    </div>
    <div class="header_swiper">
      <swiper-index></swiper-index>
    </div>
  </header>
</template>

<script>
import swiperIndex from '@/components/Swiper/swiper-index.vue'

export default {
  components: { swiperIndex },
  name: 'header-index'
}
</script>

<style lang="scss">
header {
  position: relative;
  width: 100%;
  height: 700px;
  .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;

    width: 80%;
    color: #fff;
    h1 {
      margin-bottom: 10px;

      font-size: 30px;
      font-weight: 400;
      text-align: center;
    }
    p {
      font-size: 20px;
      text-align: center;
    }
  }
}
</style>
