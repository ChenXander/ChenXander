import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import topNavMenu from './modules/topNavMenu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    topNavMenu
  },
  getters
})
