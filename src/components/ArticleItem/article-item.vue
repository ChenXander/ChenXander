<template>
  <div class="article_item">
    <!-- 文章头部 -->
    <div class="articleItem_head">
      <div class="popular">热门</div>
      <router-link :to="`/article/detail?id=${item.id}`">
        <h5 class="title">
          <span class="original">【原创】</span>
          <span class="list_title">{{ item.title }}</span>
        </h5>
      </router-link>

      <div class="time">
        <span class="day">{{ item.createTime | dayFmt }}</span>
        <span class="month">{{ item.createTime | monthFmt }}月</span>
        <span class="year">{{ item.createTime | yearFmt }}</span>
      </div>
    </div>

    <!-- 文章内容 -->
    <div class="articleItem_content">
      <a href="javascript:;" class="artImage">
        <img
          :src="baseURL + '/blogAdmin/file/down?downId=' + item.imgId"
          alt=""
        />
      </a>
      <router-link :to="`/article/detail?id=${item._id}`">
        <span class="text-grey">{{ item.description }}</span>
      </router-link>
    </div>

    <!-- 继续阅读 -->
    <div class="reading">
      <a href="javascript:;" class="resumeReading">继续阅读</a>
    </div>
    <!-- 文章底部 -->
    <div class="articleItem_footer">
      <i class="tk tk-biaoqian"></i>
      <article-tag :tagList="item.tags"></article-tag>
    </div>
  </div>
</template>

<script>
// moment时间格式化包
import moment from 'moment'

// 子组件及公共组件
import articleTag from '@/components/ArticleItem/components/article-tag.vue'

export default {
  components: { articleTag },
  name: 'article-item',
  props: {
    item: {
      type: Object, // 文章数据
      default() {
        return { msg: '获取文章数据失败' }
      }
    }
  },
  data() {
    return {
      baseURL: this.$baseURL // 基地址
    }
  },
  // 处理时间格式
  filters: {
    dayFmt(time) {
      return moment(time).toObject().date
    },
    yearFmt(time) {
      return moment(time).toObject().years
    },
    monthFmt(time) {
      return moment(time).toObject().months
    }
  }
}
</script>

<style lang="scss" scoped>
.article_item {
  display: flex;
  flex-direction: column;

  position: relative;
  margin-top: 20px;
  padding: 0 30px 10px 30px;

  overflow: hidden;
  background-color: #fff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.075),
    -5px -5px 10px rgba(0, 0, 0, 0.075);
  border-radius: 5px;

  /* 文章头部 */
  .articleItem_head {
    display: flex;
    padding-top: 30px;
    height: 100px;
    .popular {
      position: absolute;
      left: -18px;
      top: 9px;
      transform: rotate(-45deg);

      width: 74px;
      height: 20px;
      line-height: 20px;
      text-align: center;

      background-color: #ff5722;
      color: #fff;
      font-size: 15px;
    }

    .title {
      padding: 0 20vw 5px 0;

      line-height: 30px;
      border-bottom: 1px solid #e8e9e7;
      font-size: 18px;
      font-weight: 400;
      .original {
        color: #6fa3ef;
      }
      .list_title {
        color: #8b88e4;
        font-size: 17px;
      }
    }

    .time {
      position: absolute;
      right: 10px;
      top: 15px;

      padding: 0 20px 5px 20px;

      line-height: 32px;
      font-family: SourceCodeProRegular, Menlo, Monaco, Consolas, 'Courier New',
        monospace, 'Helvetica Neue', Arial, sans-serif;
      background-color: #fff;
      .month,
      .year {
        color: #999;
        font-size: 16px;
      }
      .day {
        position: relative;
        top: 2px;
        display: block;

        text-align: center;
        font-weight: 700;
        font-size: 40px;
        color: #6bc30d;
      }
    }
  }

  /* 文章内容 */
  .articleItem_content {
    display: flex;
    .artImage {
      margin-right: 20px;

      width: 300px;
      height: 180px;
      border: 1px solid #e8e9e7;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        transition: all 0.5s;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
    .text-grey {
      display: block;

      color: #5f5f5f;
      font-size: 18px;

      height: 185px;
      line-height: 1.5;
      letter-spacing: 2px;

      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  /* 继续阅读 */
  .reading {
    position: relative;

    .resumeReading {
      margin-top: 10px;

      color: #666;
      font-size: 18px;
      font-weight: 700;
    }
    &::before {
      content: ' ';
      position: absolute;
      top: 20px;
      left: 100px;
      right: 0;

      display: inline-block;

      height: 1px;
      background-color: #d0d0d0;
    }
  }

  /* 底部标签分类 */
  @keyframes transparencies {
    0% {
      opacity: 1;
    }
    20% {
      opacity: 0.8;
    }
    40% {
      opacity: 0.6;
    }
    60% {
      opacity: 0.4;
    }
    80% {
      opacity: 0.6;
    }
    90% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
  .articleItem_footer {
    display: flex;
    align-items: center;
    .tk {
      font-size: 22px;
      margin-right: 10px;

      animation: transparencies 2.5s linear infinite;
    }
  }
}
</style>
