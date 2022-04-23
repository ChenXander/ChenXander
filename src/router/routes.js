export default [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/layout-index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/home-index.vue')
      },
      {
        path: '/article',
        name: 'article',
        component: () => import('@/views/Article/article-index.vue')
      },
      {
        path: '/message',
        name: 'message',
        component: () => import('@/views/Message/message-index.vue')
      },
      {
        path: '/nav',
        name: 'nav',
        component: () => import('@/views/Nav/nav-index.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About/about-index.vue')
      }
    ]
  }
]
