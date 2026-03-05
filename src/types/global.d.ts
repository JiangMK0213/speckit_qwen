// 全局类型声明
declare global {
  interface Window {
    THING: any
    YUNKAN_CONFIG: {
      apiKey: string
      services: Array<{
        name: string
        url: string
      }>
    }
  }

  const THING: any

  type Nullable<T> = T | null
  type Optional<T> = T | undefined
  type Recordable<T = any> = Record<string, T>
}

export {}
