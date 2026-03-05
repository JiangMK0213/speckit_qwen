import instance from './instance'

export default {
  get<T = any>(url: string, params?: any, config?: any): Promise<T> {
    return instance.get(url, { params, ...config })
  },

  post<T = any>(url: string, data?: any, config?: any): Promise<T> {
    return instance.post(url, data, config)
  },

  put<T = any>(url: string, data?: any, config?: any): Promise<T> {
    return instance.put(url, data, config)
  },

  delete<T = any>(url: string, config?: any): Promise<T> {
    return instance.delete(url, config)
  }
}
