import request from '@/utils/request'

// 获取文章列表
export function getArticleList() {
  return request({
    url: '/article/list',
    method: 'GET'
  })
}

// 获取文章标签数据
export function getArticleTagsList(params) {
  return request({
    url: '/statistics/tagList',
    method: 'GET',
    params
  })
}
