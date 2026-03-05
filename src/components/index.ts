import type { App } from 'vue'
import globalComponents from './global'
import layoutComponents from './layout'

// 导出按需引入的组件
export * from './common'

export default {
  install(app: App) {
    // 注册全局组件
    app.use(globalComponents)
    // 注册布局组件
    app.use(layoutComponents)
  }
}
