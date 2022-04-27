import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入请求基地址
import { baseURL } from '@/utils/request'

// 导入amfe-flexible设置 rem 基准值
import 'amfe-flexible'

// 全局样式
import '@/styles/index.scss'
// iconfont字体图标
import '@/assets/iconfont/iconfont.css'
// element-ui
import '@/plugins'

Vue.config.productionTip = false

Vue.prototype.$baseURL = baseURL

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
