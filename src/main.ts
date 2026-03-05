import { createApp } from 'vue'
import store from './stores'
import router from './router'
import i18n from '@/locales'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import components from '@/components'
// import chartComponents from '@/chart-components'
import useTheme from '@/hooks/useTheme'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/styles/index.scss'

// 初始化主题
useTheme()

// 创建应用
const app = createApp(App)

// 注册 Element Plus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 注册插件
app.use(store)
app.use(router)
app.use(i18n)
app.use(ElementPlus)
app.use(components)
// app.use(chartComponents)

// 挂载应用
app.mount('#app')
