// 文章列表数据

const state = {
  // 按创建时间和标签过滤的文章列表
  articleFilter: {
    sortBy: 'createTime',
    tags: ''
  }
}

const mutations = {
  // 存放过滤的文章列表数据
  changeFilterObj(state, obj) {
    state.articleFilter = Object.assign(state.articleFilter, obj)
  }
}
const actions = {
  operateFilterObj({ commit }, obj) {
    commit('changeFilterObj', obj)
  }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions
}
