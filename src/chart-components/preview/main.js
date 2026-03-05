import { createApp } from 'vue'
import App from './App.vue'
import chartComponents from '../index'

const app = createApp(App)

app.use(chartComponents)
app.mount('#app')
