<template>
  <div class="home">
    <!-- 头部 -->
    <header-index></header-index>
    <main>首页内容</main>
  </div>
</template>

<script>
import headerIndex from '@/components/Header/header-index.vue'
export default {
  components: { headerIndex },
  name: 'home-index',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
