import { createApp } from 'vue'
import App from './App.vue'

import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

console.log('app mode:', import.meta.env.MODE)
console.log('app env variable:', import.meta.env)


createApp(App)
  .use(ElementPlus, { locale })
  .mount('#app')


