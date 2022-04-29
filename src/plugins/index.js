/**
 * element-ui组件
 */
import Vue from 'vue'

import {
  Popover,
  Carousel,
  CarouselItem,
  Button,
  Message,
  Tooltip,
  Link
} from 'element-ui'

Vue.use(Popover)
Vue.use(CarouselItem)
Vue.use(Carousel)
Vue.use(Button)
Vue.use(Tooltip)
Vue.use(Link)

Vue.prototype.$message = Message
