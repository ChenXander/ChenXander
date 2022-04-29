/**
 * 快捷访问
 */
const getters = {
  menu: (state) => state.topNavMenu.menu, // 顶部导航栏
  articleFilter: (state) => state.articleList.articleFilter // 过滤的文章列表
}

export default getters
