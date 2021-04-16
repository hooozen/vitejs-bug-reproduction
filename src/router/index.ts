import { createRouter, createWebHashHistory } from 'vue-router'
import  store from '@store/index'

import Login from '@components/Login.vue'
import Layout from '@components/layout/index.vue'
import Home from '@components/views/Home.vue'
import Devices from '@components/views/Devices.vue'
import DeviceDetail from '@components/views/DeviceDetail.vue'
import Staff from '@components/views/Staff.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [{
      path: 'home',
      component: Home,
    },{
      path: 'devices',
      component: Devices,
    }, {
      path: 'device-detail',
      component: DeviceDetail,
    }, {
      path: 'staff',
      component: Staff,
    }]
  }, {
    path: '/login',
    component: Login,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from) => {
  if (to.path !== '/login' && !store.getters.token) {
    router.push('/login')
  }
})

export default router
