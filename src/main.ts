import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'

import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
import './custome.scss'

console.log('app mode:', import.meta.env.MODE)
console.log('app env variable:', import.meta.env)


createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, { locale })
  .mount('#app')
