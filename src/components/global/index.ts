import type { App } from 'vue'

const commonComponents = import.meta.glob('./*.vue', { eager: true })

export default {
  install(app: App) {
    Object.entries(commonComponents).forEach(([path, module]) => {
      const componentName = path.split('/').pop()?.split('.')[0]
      if (componentName) {
        app.component(componentName, (module as any).default)
      }
    })
  }
}
