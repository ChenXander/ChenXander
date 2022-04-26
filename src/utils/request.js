// 网络请求
import axios from 'axios'

// 创建axios实例
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 设置axios请求的基础的基础地址
  timeout: 5000 // 定义5秒超时
})

export default request
