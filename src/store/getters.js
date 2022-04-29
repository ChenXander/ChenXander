/**
 * 快捷访问
 */
const getters = {
  menu: (state) => state.topNavMenu.menu, // 顶部导航栏
  articleList: (state) => state.articleList.articleList, // 文章列表数据
  articleTags: (state) => state.articleList.articleTags // 文章标签
}

export default getters
