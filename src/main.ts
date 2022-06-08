import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/css/index.css'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { setupStore } from './store'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store as any)
// bug fixed 刷新页面 跳到 not found
// setupStore() 注册动态路由 => app.use(router) 匹配路由

// 加载本地缓存
setupStore()
// 匹配路由
app.use(router as any)

app.mount('#app')
