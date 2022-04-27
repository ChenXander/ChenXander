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
        <a href="https://github.com/ChenXander" target="_blank">
          <i class="tk tk-GitHub"></i>
        </a>
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
  </div>
</template>

<script>
export default {
  name: 'home-aside',
  methods: {
    // 加入书签
    addBookmark() {
      this.$message({
        message: '按下 CTRL+D 收藏【ThreeKim博客】',
        type: 'warning'
      })
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
}
</style>
