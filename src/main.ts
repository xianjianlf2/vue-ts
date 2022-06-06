import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mxRequest from './service'
import 'normalize.css'
import './assets/css/index.css'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router as any)
app.use(store as any)
app.mount('#app')

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

mxRequest
  .request<DataType>({
    url: '/home/multidata',
    method: 'GET'
  })
  .then((res) => {
    console.log(res)
  })
