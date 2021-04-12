import { createRouter, createWebHashHistory } from 'vue-router'

import Login from 'components/Login.vue'
import Layout from 'components/layout/index.vue'
import Devices from 'components/views/Devices.vue'
import DeviceDetail from 'components/views/DeviceDetail.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [{
      path: 'devices',
      component: Devices,
    }, {
      path: 'device-detail',
      component: DeviceDetail,
    }]
  }, {
    path: '/login',
    component: Login,
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
});

