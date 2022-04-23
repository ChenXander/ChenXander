<template>
  <nav>
    <div class="left_menu">
      <ul class="topNav_ul">
        <router-link
          tag="li"
          class="topNav_li pointer"
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
    </div>
    <div class="right"></div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'top-nav',
  data() {
    return {}
  },
  computed: {
    // 获取导航菜单选项
    ...mapGetters({
      menuList: 'menu'
    })
  }
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  width: 100%;
  height: 60px;
  border: 1px solid #000;
  .left_menu {
    flex: 1;
    .topNav_ul {
      display: flex;
      justify-content: flex-start;
      font-size: 15px;
    }
  }
}
</style>
