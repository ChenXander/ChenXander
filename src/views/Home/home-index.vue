<template>
  <main class="home_content">
    <!-- 左侧内容区 -->
    <article class="home_left">
      <!-- 内容区标题 -->
      <header class="content_title">
        <i class="tk tk-shuye"></i>
        <span>文章精选</span>
      </header>

      <!-- 内容区文章 -->
      <section class="container">
        <article-item></article-item>
      </section>

      <!-- 内容区底部 -->
      <footer>我是底部</footer>
    </article>

    <!-- 右侧侧边栏 -->
    <aside class="home_right">
      <home-aside></home-aside>
    </aside>
  </main>
</template>

<script>
import homeAside from '@/views/Home/components/home-aside.vue'
import ArticleItem from '@/components/ArticleItem/article-item.vue'

export default {
  components: { homeAside, ArticleItem },
  name: 'home-index',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.home_content {
  background: #f0f0f0;
  .home_right {
    width: 23%;
  }
}
</style>
