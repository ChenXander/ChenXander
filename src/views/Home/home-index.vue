<template>
  <main class="home_content">
    <div class="home_left"></div>
    <div class="home_right">
      <home-aside></home-aside>
    </div>
  </main>
</template>

<script>
import homeAside from '@/views/Home/components/home-aside.vue'
export default {
  components: { homeAside },
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
