import http from './http'

// 通过服务名称获取孪生服务 URL
export function getTwinServiceUrl(serviceName: string) {
  if (!serviceName) {
    console.error('缺少服务名称')
    return false
  }
  if (!window.YUNKAN_CONFIG?.apiKey || !Array.isArray(window.YUNKAN_CONFIG?.services)) {
    console.error('云瞰插件未正确启用')
    return false
  }

  const service = window.YUNKAN_CONFIG.services.find(item => item.name === serviceName)

  if (!service) {
    console.error(`孪生服务 - ${serviceName} 未定义`)
    return false
  }

  return service.url
}

// 根据 URL 和参数请求孪生服务
export async function requestTwinService<T>(url: string, params?: any): Promise<T> {
  const apiKey = window.YUNKAN_CONFIG?.apiKey
  if (!apiKey) {
    console.error('云瞰插件未正确启用')
    return Promise.reject(new Error('云瞰插件未正确启用'))
  }

  const data = { apiKey, ...params }

  return http.post(url, data, {
    headers: {
      authentication: window.YUNKAN_CONFIG.apiKey
    }
  })
}
