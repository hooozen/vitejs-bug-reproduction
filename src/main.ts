import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from './api'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'


createApp(App)
  .use(router)
  .use(ElementPlus)
  .provide('api', api)
  .mount('#app')
