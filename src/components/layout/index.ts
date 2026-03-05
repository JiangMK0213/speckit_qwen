import type { App } from 'vue'

const layoutComponents = import.meta.glob('./*.vue', { eager: true })

export default {
  install(app: App) {
    Object.entries(layoutComponents).forEach(([path, module]) => {
      const componentName = path.split('/').pop()?.split('.')[0]
      if (componentName) {
        app.component(componentName, (module as any).default)
      }
    })
  }
}
