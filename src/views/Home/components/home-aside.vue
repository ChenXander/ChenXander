<template>
  <!-- 主页侧边栏 -->
  <div class="home_aside">
    <!-- 我的信息 -->
    <div class="userInfo">
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.huabanimg.com%2F3a4b19f810474108ca3e49382b650e92a32e8efc65f3-NHFQrs_fw658&refer=http%3A%2F%2Fhbimg.huabanimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653454871&t=271393b2b56a9b46d842fae8cb2bd72d"
        alt=""
      />
      <h2>ChenXander</h2>
      <h3>Three Kim</h3>
      <p>在前端的路上越走越远~</p>
      <!-- 将博客加入书签 -->
      <el-button class="addBookmark" type="primary" @click="addBookmark">
        <i class="tk tk-shuye"></i>
        加入书签
      </el-button>

      <!-- 联系方式 -->
      <div class="contactIcon mousePointer">
        <el-popover placement="bottom" width="200" trigger="hover">
          <slot name="content">
            <img
              style="width: 175px; height: 175px"
              src="@/assets/img/footer/qq_code.png"
              alt=""
            />
          </slot>
          <i class="tk tk-qq" slot="reference"></i>
        </el-popover>
        <el-popover placement="bottom" width="200" trigger="hover">
          <slot name="content">
            <img
              style="width: 175px; height: 175px"
              src="@/assets/img/footer/weChat_code.jpg"
              alt=""
            />
          </slot>
          <i class="tk tk-wexin" slot="reference"></i>
        </el-popover>
        <el-tooltip effect="light" content="Github" placement="bottom">
          <a href="https://github.com/ChenXander" target="_blank">
            <i class="tk tk-GitHub"></i>
          </a>
        </el-tooltip>
      </div>
    </div>

    <!-- 公告 -->
    <div class="announcement mouseText">
      <div class="announcement_content">
        <i class="tk tk-gonggao"></i>
        公告
      </div>
      <div class="announcement_describe">
        欢迎来到ThreeKim的博客! 我是ChenXander, 乐意与您分享前端知识!
      </div>
    </div>

    <!-- 文章排序 -->
    <div class="articleSort">
      <div class="articleSort_title">文章排序</div>
      <!-- 文章排序标签 -->
      <div class="sortingTags_list mousePointer">
        <div
          :class="
            articleFilter.sortBy === item.type
              ? 'list_box list_active'
              : 'list_box'
          "
          v-for="item in articleSort"
          :key="item.type"
        >
          <el-tag :type="item.tagType" @click="tagSortFn(item.type)">
            {{ item.name }}
          </el-tag>
        </div>
      </div>
    </div>

    <!-- 文章标签 -->
    <div class="articleTags">
      <div class="articleTags_title">
        文章标签
        <el-link
          type="primary"
          v-if="articleFilter.tags"
          class="all_article"
          :underline="false"
          @click.native="tagClick(false)"
        >
          全部文章
        </el-link>
      </div>
      <!-- 标签组件 -->
      <article-tag
        class="tagList"
        :tagList="tagList"
        :showBorder="true"
        @tagClick="tagClick"
      >
      </article-tag>
      <div class="noTags" v-if="tagList.length == 0">暂无标签</div>
    </div>
  </div>
</template>

<script>
// api请求
import { getArticleTagsList } from '@/api/articleAPI'
// 子组件及公共组件
import articleTag from '@/components/ArticleItem/components/article-tag.vue'

import { mapGetters } from 'vuex'

export default {
  components: { articleTag },
  name: 'home-aside',
  data() {
    return {
      tagList: [], // 文章标签数组
      articleSort: [
        {
          name: '新发布',
          type: 'createTime',
          tagType: 'info'
        },
        {
          name: '浏览量',
          type: 'meta.viewTotal',
          tagType: ''
        },
        {
          name: '点赞量',
          type: 'meta.likeTotal',
          tagType: 'success'
        },
        {
          name: '评论量',
          type: 'meta.commentTotal',
          tagType: 'warning'
        },
        {
          name: '字数量',
          type: 'meta.txtTotal',
          tagType: 'danger'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['articleFilter'])
  },
  created() {
    this.getArticleTagsList()
  },
  methods: {
    // 加入书签
    addBookmark() {
      this.$message({
        message: '按下 CTRL+D 收藏【ThreeKim博客】',
        type: 'warning'
      })
    },
    // 文章排序，标签排序
    tagSortFn(type) {
      this.$store.dispatch('operateFilterObj', { sortBy: type })
    },
    // 标签点击事件
    tagClick(id) {
      const tags = id ? id : ''
      this.$store.dispatch('operateFilterObj', { tags })
    },

    // 获取文章标签列表
    async getArticleTagsList() {
      const { data } = await getArticleTagsList()
      console.log(data)
      data.forEach((item) => {
        item.name = item._id.name
        item.bgColor = item._id.bgColor
        item._id = item._id.id
      })
      this.tagList = data
    }
  }
}
</script>

<style lang="scss" scoped>
.home_aside {
  margin-bottom: 20px;

  /* 我的信息 */
  .userInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #fff;
    border-radius: 10px;
    text-align: center;
    img {
      margin-top: 20px;
      margin-bottom: 5px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    h2 {
      font-size: 20px;
      margin-bottom: 5px;
    }
    h3 {
      font-size: 12px;
      opacity: 0.5;
      margin-bottom: 5px;
    }
    p {
      font-size: 13px;
      margin-bottom: 10px;
    }

    .addBookmark {
      margin-bottom: 15px;
      width: 90%;
      height: 40px;
    }

    .contactIcon {
      display: flex;
      margin-bottom: 20px;
      .tk {
        color: #000;
        font-size: 30px;
        padding: 5px 20px;
      }
    }
  }

  /* 公告 */
  @keyframes changeSize {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }
  .announcement {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-top: 20px;
    padding: 15px;

    background: #fff;
    border-radius: 10px;

    .announcement_content {
      font-size: 14px;
      .tk {
        display: inline-block;
        margin-right: 5px;

        color: #f00;
        transition: all 0.5s;
        animation: changeSize 1s linear infinite;
      }
    }
    .announcement_describe {
      margin-top: 10px;
      font-size: 14px;
      color: #666;
    }
  }

  /* 文章排序 */
  .articleSort {
    margin-top: 20px;
    padding: 15px;

    text-align: center;
    background: #fff;
    border-radius: 10px;
    .articleSort_title {
      height: 35px;
      font-size: 14px;
      border-bottom: 1px solid #e8e9e7;
    }

    .sortingTags_list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .list_box {
        display: flex;
        margin-top: 15px;
        &:not(:nth-child(4n)) {
          margin-right: calc(4% / 3);
        }
      }
      .list_active {
        border: 1px dashed rgba(0, 0, 0, 0.3);
      }
    }
  }

  /* 文章标签列表 */
  .articleTags {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-top: 20px;
    padding: 15px;

    background: #fff;
    border-radius: 10px;
    text-align: center;

    .articleTags_title {
      position: relative;
      height: 35px;
      font-size: 14px;
      border-bottom: 1px solid #e8e9e7;
      .all_article {
        position: absolute;
        right: 20px;
      }
    }

    .tagList {
      display: flex;
      justify-content: space-between;

      margin-top: 15px;
    }

    .noTags {
      width: 100%;
      text-align: center;
      letter-spacing: 2px;
      color: #989898;
    }
  }
}
</style>
