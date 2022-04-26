import request from '@/utils/request'

// 获取文章列表
export function getArticleList() {
  return request({
    url: '/article/list',
    method: 'GET'
  })
}
