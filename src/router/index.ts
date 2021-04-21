import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store/index'

import Login from '@views/login/index.vue'
import Layout from '@layout/index.vue'
import Home from '@views/home/index.vue'
import Devices from '@views/devices/index.vue'
import DeviceDetail from '@views/devices/detail.vue'
import Stores from '@views/stores/index.vue'
import Staff from '@views/staff/index.vue'
import Organizations from '@views/organizations/index.vue'
import Positions from '@views/positions/index.vue'
import Operators from '@views/operators/index.vue'
import OperationDetail from '@views/operators/detail.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [{
      path: 'home',
      component: Home,
    }, {
      path: 'devices',
      component: Devices,
    }, {
      path: 'device-detail',
      component: DeviceDetail,
    }, {
      path: 'stores',
      component: Stores,
    }, {
      path: 'staff',
      component: Staff,
    }, {
      path: 'organizations',
      component: Organizations
    }, {
      path: 'positions',
      component: Positions
    }, {
      path: 'operators',
      component: Operators
    }, {
      name: 'opratorDetail',
      path: 'operator-detail',
      props: true,
      component: OperationDetail
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
