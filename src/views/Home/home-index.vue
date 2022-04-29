<template>
  <main class="home_content">
    <!-- 头部 -->
    <header class="content_title custom_container">
      <div class="featured_Articles">
        <i class="tk tk-shuye"></i>
        <span>文章精选</span>
      </div>
    </header>

    <!-- 内容区 -->
    <div class="content_body custom_container">
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
    <footer class="home_footer custom_container mousePointer">
      <div class="home_footer_img">
        <el-tooltip
          content="点击去查看更多文章哦~"
          placement="right"
          effect="light"
        >
          <img
            class="loadingMoreImg mousePointer"
            src="@/assets/img/footer/loadingMore.gif"
            alt=""
            @click="loadMoreArticles"
          />
        </el-tooltip>
      </div>
    </footer>
    <!-- 返回顶部 -->
    <back-top></back-top>
  </main>
</template>

<script>
// 子组件及公共组件
import homeAside from '@/views/Home/components/home-aside.vue'
import ArticleItem from '@/components/ArticleItem/article-item.vue'
import BackTop from '@/components/BackTop/back-top.vue'

// api请求
import { getArticleList } from '@/api/articleAPI'

export default {
  components: { homeAside, ArticleItem, BackTop },
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
      // 将数据存放到vuex
      this.$store.commit('articleList/getArticleList', res.data)
    },
    // 加载更多文章跳转文章页
    loadMoreArticles() {
      this.$router.push('/article')
    }
  }
}
</script>

<style lang="scss" scoped>
.home_content {
  padding-bottom: 20px;
  background: #f0f0f0;
  /* 头部 */
  .content_title {
    padding: 10px 0;

    height: 30px;
    color: #0a91b9;
    text-align: center;
    .featured_Articles {
      width: 70%;
    }
    .tk {
      margin-right: 15px;
      font-size: 22px;
      font-weight: bold;
    }
    span {
      font-size: 16px;
      font-weight: 800;
    }
  }

  .content_body {
    display: flex;
    justify-content: space-between;

    /* 左侧内容 */
    .home_left {
      width: 70%;
    }

    /* 侧边栏 */
    .home_right {
      margin-top: 20px;
      width: 23%;
    }
  }

  /* 底部 */
  .home_footer {
    margin: 20px auto 0;

    .home_footer_img {
      display: flex;
      justify-content: center;
      width: 70%;
    }
    .loadingMoreImg {
      height: 60px;
    }
  }
}
</style>
