import request from '@/utils/request'

// 获取文章列表
export function getArticleList(params) {
  return request({
    url: '/article/list',
    method: 'GET',
    params
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
