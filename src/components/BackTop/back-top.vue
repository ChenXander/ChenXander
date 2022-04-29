<template>
  <!-- 返回顶部组件 -->
  <div class="back_top mousePointer" @click="backTopFn" :style="{ bottom }">
    <img src="@/assets/img/backTop/backTop.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'back-top',
  computed: {
    maxBottom() {
      const clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight

      if (clientHeight < 2000) {
        return 250
      } else {
        const distance = clientHeight - 2000
        return 250 + distance
      }
    },
    bottom() {
      if (this.isBack) {
        return '100%'
      } else {
        return `${this.maxBottom}px`
      }
    }
  },
  data() {
    return {
      isBack: true
    }
  },
  mounted() {
    // 监听滚动事件
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      const clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight

      if (scrollTop > clientHeight / 1.3) {
        this.isBack = false
      } else {
        this.isBack = true
      }
    },
    // 返回顶部点击事件
    backTopFn() {
      document.querySelector('#app').scrollIntoView({
        block: 'start', // 垂直方向的对齐方式
        behavior: 'smooth' // 动画过渡效果
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.back_top {
  position: fixed;
  right: 0;

  z-index: 999;

  width: 70px;
  height: 900px;

  transition: bottom 1s;
}
</style>
