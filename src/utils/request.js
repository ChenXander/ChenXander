// 网络请求
import axios from 'axios'

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

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const { code, data } = response.data
    if (code === '10000') {
      return data
    } else {
      return Promise.reject(code)
    }
  },
  (error) => {
    return Promise.reject(error) // 返回执行错误
  }
)

export default request
