<template>
  <!-- 轮播图组件 -->
  <el-carousel trigger="click" height="700px">
    <el-carousel-item v-for="(item, index) in imgList" :key="index">
      <img :src="item.swiperImg" class="swiperImg" alt="" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'swiper-index',
  data() {
    return {
      imgList: [
        { swiperImg: require('@/assets/img/swiper/swiper1.jpg') },
        { swiperImg: require('@/assets/img/swiper/swiper2.jpg') },
        { swiperImg: require('@/assets/img/swiper/swiper3.png') },
        { swiperImg: require('@/assets/img/swiper/swiper4.jpg') },
        { swiperImg: require('@/assets/img/swiper/swiper5.jpg') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.swiperImg {
  width: 100%;
  height: 100%;
}
</style>
