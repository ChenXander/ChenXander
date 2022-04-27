<template>
  <!-- 布局组件 -->
  <div class="layout">
    <!-- 头部导航 -->
    <top-nav></top-nav>
    <header-index></header-index>
    <!-- 内容区，二级路由出口 -->
    <router-view class="layout_content"></router-view>
    <!-- 底部 -->
    <footer-index></footer-index>
  </div>
</template>

<script>
// 公共组件
import TopNav from '@/components/TopNav/top-nav.vue'
import FooterIndex from '@/components/Footer/footer-index.vue'
import HeaderIndex from '@/components/Header/header-index.vue'

export default {
  components: { TopNav, FooterIndex, HeaderIndex },
  name: 'layout-index',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
}
</style>
