<template>
  <!-- 文章标签组件 -->
  <div class="tag_list mousePointer">
    <div
      v-for="item in tagList"
      :key="item._id"
      :class="
        articleFilter.tags == item._id && showBorder
          ? 'list_box box_active'
          : 'list_box'
      "
      :style="{ backgroundColor: item.bgColor }"
      @click="tagClick(item._id)"
    >
      <i :style="{ borderRightColor: item.bgColor }"></i>
      {{ item.name }}{{ item.count ? '(' + item.count + ')' : '' }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'article-tag',
  props: {
    tagList: {
      type: Array, // 标签数组
      default() {
        return []
      }
    },
    showBorder: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 将被点击的标签id传给父组件
    tagClick(id) {
      this.$emit('tagClick', id)
    }
  },
  computed: {
    ...mapGetters(['articleFilter'])
  }
}
</script>

<style lang="scss" scoped>
.tag_list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .list_box {
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    margin: 5px 10px;
    padding: 0 5px 0px 10px;

    color: #fff;
    font-size: 14px;

    height: 22px;
    line-height: 22px;
    border-radius: 0 5px 5px 0;
    i {
      position: absolute;
      right: 100%;

      border: 11px solid transparent;
    }
    &:after {
      content: '';
      position: absolute;
      top: 9px;
      left: 0;

      width: 5px;
      height: 5px;

      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.3);
    }
  }

  .box_active::after {
    display: none;
  }
}
</style>
