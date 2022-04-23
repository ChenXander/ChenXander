import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入amfe-flexible设置 rem 基准值
import 'amfe-flexible'

// 全局样式
import '@/styles/index.scss'
// iconfont字体图标
import '@/assets/iconfont/iconfont.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
