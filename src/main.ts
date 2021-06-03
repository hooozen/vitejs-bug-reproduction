import ECharts from 'vue-echarts'
import { use } from "echarts/core";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { CanvasRenderer } from 'echarts/renderers'
import { LineChart, BarChart, PieChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, LegendComponent, TitleComponent, ToolboxComponent } from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  PieChart,
  LineChart,
  ToolboxComponent,
  TitleComponent,
  LegendComponent,
  GridComponent,
  TooltipComponent
]);

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
  .component('v-chart', ECharts)
  .mount('#app')


