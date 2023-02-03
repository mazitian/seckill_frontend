import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import './assets/css/index.less'
import 'normalize.css'

import App from './App.vue'
import router from './router'
import 'mlysltesttwo-ui/es/style.css'
// import mlyslui from 'mlysltesttwo-ui'

import MlyslUI from 'mlysl-ui/mlysl-ui.js'
import 'mlysl-ui/style.css'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// app.use(mlyslui)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(MlyslUI)
app.mount('#app')
