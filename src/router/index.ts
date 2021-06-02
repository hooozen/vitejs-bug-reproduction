import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store/index'

import DeviceDetail from '@views/devices/detail.vue'
import DeviceUpgrade from '@views/devices/upgrade.vue'
import DeviceType from '@views/system/device-type/index.vue'
import DeviceTypeDetail from '@views/system/device-type/detail.vue'
import Devices from '@views/devices/index.vue'
import Dict from '@views/system/dict/index.vue'
import Goods from '@views/goods/index.vue'
import GoodsDetail from '@views/goods/detail.vue'
import Home from '@views/home/index.vue'
import Layout from '@layout/index.vue'
import Login from '@views/login/index.vue'
import OperationDetail from '@views/operators/detail.vue'
import Operators from '@views/operators/index.vue'
import Roles from '@views/system/roles/index.vue'
import Staff from '@views/staff/index.vue'
import StaffDetail from '@views/staff/detail.vue'
import StoreDetail from '@views/stores/detail.vue'
import Stores from '@views/stores/index.vue'
import UserDetail from '@views/system/users/detail.vue'
import UserInfo from '@views/system/user-info.vue'
import Users from '@views/system/users/index.vue'

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
      name: 'device-detail',
      path: 'device-detail',
      component: DeviceDetail,
      props: { type: 'edit' }
    }, {
      path: 'device-upgrade',
      component: DeviceUpgrade,
    }, {
      path: 'goods',
      component: Goods,
    }, {
      name: 'goods-add',
      path: 'goods-add',
      props: { type: 'add' },
      component: GoodsDetail
    }, {
      name: 'goods-detail',
      path: 'goods-detail',
      props: { type: 'edit' },
      component: GoodsDetail
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
      name: 'staff-detail',
      path: 'staff-detail',
      props: { type: 'edit' },
      component: StaffDetail
    }, {
      path: 'dict',
      component: Dict
    }, {
      path: 'roles',
      component: Roles
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
    }, {
      name: 'userInfo',
      path: 'user-info',
      component: UserInfo
    }, {
      name: 'users',
      path: 'users',
      component: Users
    }, {
      name: 'add-user',
      path: 'add-user',
      component: UserDetail,
      props: { type: 'add' }
    }, {
      name: 'user-detail',
      path: 'user-detail',
      component: UserDetail,
      props: { type: 'edit' }
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
