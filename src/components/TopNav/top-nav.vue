<template>
  <!-- 顶部导航栏 -->
  <nav :style="nav_style">
    <!-- 左侧导航选项 -->
    <div class="left_menu">
      <ul class="topNav_ul">
        <router-link
          tag="li"
          class="topNav_li mousePointer"
          v-for="(item, index) in menuList"
          :key="index"
          :to="{ path: item.path }"
        >
          <div class="topNav_title">
            <i class="tk" :class="item.icon"></i>
            {{ item.name }}
          </div>
        </router-link>
      </ul>
      <!-- 搜索框 -->
      <div class="topNav_search">
        <input
          type="text"
          placeholder="搜索你想要的内容"
          class="search_box mouseText"
        />
        <button class="mousePointer">
          <i class="tk tk-sousuo"></i>
        </button>
      </div>
    </div>
    <!-- 右侧登录 -->
    <div class="right_login">
      <div class="login mousePointer">登录</div>

      <div class="logout">
        <el-popover placement="bottom" trigger="hover" width="150">
          <div class="logout mousePointer">退出登录</div>
          <span slot="reference">用户名</span>
        </el-popover>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'top-nav',
  data() {
    return {
      nav_style: {}
    }
  },
  mounted() {
    //监听页面滚动
    window.addEventListener('scroll', this.windowScroll)
  },
  computed: {
    // 获取导航菜单选项
    ...mapGetters({
      menuList: 'menu'
    })
  },
  methods: {
    windowScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scrollTop > 700) {
        this.nav_style = {
          backgroundColor: `#fff`,
          boxShadow: `1px 1px 5px rgba(0, 0, 0, 0.2)`,
          color: `#000`,
          transition: `all 1s`
        }
      } else {
        this.nav_style = {
          transition: `all 1s`
        }
      }
    }
  },
  destroyed() {
    //销毁滚动事件
    window.removeEventListener('scroll', this.windowScroll)
  }
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  padding: 0 120px;

  transition: all 0.3s;

  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  color: #fff;

  /* 左侧 */
  .left_menu {
    display: flex;
    width: 74%;

    /* 导航选项 */
    .topNav_ul {
      display: flex;
      justify-content: flex-start;

      .topNav_li {
        display: inline-block;
        position: relative;

        margin-right: 25px;

        &::before {
          content: '';
          position: absolute;
          left: 50%;

          width: 0;
          height: 2px;
          bottom: 10px;
          transition: all 0.6s;
          background: #409eff;
        }
        &.router-link-exact-active,
        &:hover {
          color: #409eff;
          &::before {
            width: 100%;
            left: 0;
          }
        }
      }
    }
    /* 搜索框 */
    .topNav_search {
      display: flex;
      flex: 1;
      align-items: center;

      padding: 0;

      .search_box {
        height: 40px;
        border: none;
        outline: none;
      }
      button {
        color: #fff;
      }
    }
  }

  /* 右侧 */
  .right_login {
    display: flex;
    justify-content: flex-end;

    width: 26%;
    .login {
      position: relative;

      width: 40px;
      text-align: center;
      &::before {
        content: '';
        position: absolute;
        left: 50%;

        width: 0;
        height: 2px;
        bottom: 10px;
        transition: all 0.6s;
        background: #409eff;
      }
      &:hover {
        color: #409eff;
        &::before {
          width: 100%;
          left: 0;
        }
      }
    }
  }
}
</style>
