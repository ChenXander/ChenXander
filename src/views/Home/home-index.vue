<template>
  <main class="home_content">
    <!-- 头部 -->
    <header class="content_title">
      <i class="tk tk-shuye"></i>
      <span>文章精选</span>
    </header>

    <!-- 内容区 -->
    <div class="content_body">
      <article class="home_left">
        <!-- 左侧内容区文章 -->
        <section class="container">
          <article-item v-for="(item, index) in list" :key="index" :item="item">
          </article-item>
        </section>
      </article>

      <!-- 右侧侧边栏 -->
      <aside class="home_right">
        <home-aside></home-aside>
      </aside>
    </div>

    <!-- 底部 -->
    <footer class="home_footer mousePointer">我是底部</footer>
  </main>
</template>

<script>
// 子组件及公共组件
import homeAside from '@/views/Home/components/home-aside.vue'
import ArticleItem from '@/components/ArticleItem/article-item.vue'

// api请求
import { getArticleList } from '@/api/articleAPI'

export default {
  components: { homeAside, ArticleItem },
  name: 'home-index',
  data() {
    return {
      list: [] // 文章列表数据
    }
  },
  created() {
    this.getArticleList()
  },
  methods: {
    // 获取文章列表数据
    async getArticleList() {
      const res = await getArticleList()
      this.list = res.data
      console.log(this.list)
    }
  }
}
</script>

<style lang="scss" scoped>
.home_content {
  display: flex;
  flex-direction: column;
  background: #f0f0f0;
  /* 头部 */
  .content_title {
    padding: 10px 0;

    width: 70%;
    height: 30px;
    text-align: center;
    .tk {
      font-size: 22px;
      color: #fff;
      color: #0a91b9;
      font-weight: bold;
      margin-right: 6px;
    }
    span {
      color: #0a91b9;
      font-size: 16px;
      font-weight: 800;
    }
  }

  .content_body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* 左侧内容 */
    .home_left {
      display: flex;
      justify-content: space-between;
      flex: 1;
    }

    /* 侧边栏 */
    .home_right {
      margin-top: 20px;
    }
  }

  /* 底部 */
  .home_footer {
    margin: 20px auto 0;
  }
}
</style>
