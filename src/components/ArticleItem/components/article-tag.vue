<template>
  <!-- 文章标签组件 -->
  <div class="tag-list">
    <div
      class="list-box mousePointer"
      v-for="item in tagList"
      :key="item._id"
      :style="{ backgroundColor: item.bgColor }"
    >
      <i :style="{ borderRightColor: item.bgColor }"></i>
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-tag',
  props: {
    tagList: {
      type: Array, // 标签数组
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .list-box {
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
}
</style>
