import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from 'components/layout/index.vue'
import Devices from 'components/views/Devices.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [{
      path: 'devices',
      component: Devices,
    }]
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
});

