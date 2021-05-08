import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store/index'

import Login from '@views/login/index.vue'
import Layout from '@layout/index.vue'
import Home from '@views/home/index.vue'
import Devices from '@views/devices/index.vue'
import DeviceDetail from '@views/devices/detail.vue'
import Stores from '@views/stores/index.vue'
import StoreDetail from '@views/stores/detail.vue'
import Staff from '@views/staff/index.vue'
import StaffDetail from '@views/staff/detail.vue'
import Organizations from '@views/organizations/index.vue'
import Positions from '@views/positions/index.vue'
import Operators from '@views/operators/index.vue'
import DeviceType from '@views/device-type/index.vue'
import DeviceTypeDetail from '@views/device-type/detail.vue'
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
      name: 'store-detail',
      path: 'store-detail',
      props: { type: 'edit' },
      component: StoreDetail
    }, {
      name: 'add-store',
      path: 'add-store',
      props: { type: 'add' },
      component: StoreDetail
    }, {
      path: 'staff',
      component: Staff,
    }, {
      name: 'add-staff',
      path: 'add-staff',
      props: { type: 'add' },
      component: StaffDetail
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
      props: { type: 'edit' },
      component: OperationDetail
    }, {
      name: 'opratorAdd',
      path: 'add-operator',
      props: { type: 'add' },
      component: OperationDetail
    }, {
      name: 'deviceType',
      path: 'device-type',
      component: DeviceType
    }, {
      name: 'devictTypeDetail',
      path: 'device-type-detail',
      component: DeviceTypeDetail,
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

/*
router.beforeEach((to, from) => {
  if (to.path !== '/login' && !store.getters.token) {
    router.push('/login')
  }
})
*/

export default router
