/**
 * 顶部导航菜单选项
 */
const state = {
  menu: [
    {
      name: '首页',
      path: '/',
      icon: 'tk-shouye'
    },
    {
      name: '文章',
      path: '/article',
      icon: 'tk-biaoqian'
    },
    {
      name: '归档',
      path: '/archive',
      icon: 'tk-biji'
    },
    {
      name: '留言',
      path: '/message',
      icon: 'tk-liuyan'
    },
    {
      name: '导航',
      path: '/nav',
      icon: 'tk-daohang'
    },
    {
      name: '关于',
      path: '/about',
      icon: 'tk-guanyu'
    }
  ]
}

const mutations = {}
const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
