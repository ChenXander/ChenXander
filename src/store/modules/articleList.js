// 文章列表数据

const state = {
  articleList: [], // 总数据
  articleTags: []
}

const mutations = {
  getArticleList(state, listData) {
    state.articleList = listData // 存放文章列表数据
  }
}
const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
