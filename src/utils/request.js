/**
 * 网络请求
 */
import axios from 'axios'
import { Message } from 'element-ui'

// axios请求的基础的基础地址
export const baseURL = 'http://localhost:3000'

// 创建axios实例
const request = axios.create({
  baseURL: baseURL + '/blogPage',
  timeout: 5000 // 定义5秒超时
})

// 请求拦截器
// request.interceptors.request.use(
//   (config) => {},
//   (error) => {
//     return Promise.reject(error)
//   }
// )

/**
 * 错误提示函数
 */
const tip = (msg) => {
  Message.warning({
    message: msg
  })
}
/**
 * 请求失败统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status) => {
  switch (status) {
    case 403:
      tip('登录过期，请重新登录')
      break
    case 404:
      tip('网络请求不存在')
      break
    case 500:
      tip('服务器错误')
      break
    default:
      tip('请求失败')
  }
}

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      console.log(response.data)
      return response.data
    } else {
      return Promise.reject(response)
    }
  },
  (error) => {
    const { response } = error
    if (response) {
      // 请求发出，但是不是2xx范围
      errorHandle(response.status, response.data.errMsg)
      return Promise.reject(response)
    }
  }
)

export default request
