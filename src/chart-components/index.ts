/**
 * chart-components 主入口文件
 */
import type { App } from 'vue'
import { BasicBar } from './components/bar'
import { BasicLine } from './components/line'
import { BasicPie } from './components/pie'

// 组件列表
const components = [BasicBar, BasicLine, BasicPie]

// 默认导出
export default {
  version: '0.1.0',
  install(app: App) {
    // 注册全局组件
    for (const component of components) {
      app.component(component.name as string, component)
    }
  }
}

// 导出所有组件
export * from './components'
