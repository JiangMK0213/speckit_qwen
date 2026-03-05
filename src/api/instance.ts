import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import router from '@/router'
import { ElMessage } from 'element-plus'

// 创建和配置 axios 实例
const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 存储正在进行的请求
const pendingRequests = new Map<string, AbortController>()

// 添加请求到 pending 列表
const addPendingRequest = (config: InternalAxiosRequestConfig) => {
  // 请求并发控制
  const controller = new AbortController()
  config.signal = controller.signal

  // 可以根据请求URL或其他标识存储并发请求
  const requestKey = encodeURIComponent(
    `${config.url}:${JSON.stringify(config.params || {})}:${JSON.stringify(config.data || {})}`
  )

  // 如果存在相同请求，则取消之前的请求
  if (pendingRequests.has(requestKey)) {
    const previousController = pendingRequests.get(requestKey)
    previousController?.abort()
  }

  // 存储当前请求的控制器
  pendingRequests.set(requestKey, controller)

  return requestKey
}

// 从 pending 列表中移除请求
const removePendingRequest = (requestKey: string) => {
  pendingRequests.delete(requestKey)
}

// 请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 添加并发控制
    const requestKey = addPendingRequest(config)
    config.headers = config.headers || {}
    config.headers._requestKey = requestKey
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 请求完成后，从 pending 列表中删除
    const requestKey = response.config.headers?._requestKey as string
    if (requestKey) {
      removePendingRequest(requestKey)
    }

    const { code, message, data } = response.data
    if (code === 200) {
      return data
    } else {
      ElMessage.error(message || '请求失败')
      return Promise.reject(new Error(message || '请求失败'))
    }
  },
  (error: any) => {
    // 请求失败后，也从 pending 列表中删除
    if (error.config) {
      const requestKey = error.config.headers?._requestKey as string
      if (requestKey) {
        removePendingRequest(requestKey)
      }
    }

    if (error.response) {
      const { status, data } = error.response
      switch (status) {
        case 404:
          router.push('/404')
          break
        default:
          ElMessage.error(data.message || '请求失败')
          break
      }
    }

    return Promise.reject(error)
  }
)

export default instance
