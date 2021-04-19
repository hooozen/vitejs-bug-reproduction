interface MenuItem {
  id: Number,
  label: String,
  path: String,
  icon?: String,
  children?: MenuItem[]
}

const menu: MenuItem[] = [
  {
    id: 1,
    label: '首页',
    path: 'home',
    icon: 's-data',
    children: [],
  }, {
    id: 2,
    label: '设备管理',
    icon: 'goblet-full',
    path: '',
    children: [{
      id: 3,
      label: '设备管理',
      path: 'devices',
      children: [],
    }, {
      id: 4,
      label: '设备升级',
      path: 'device-upgrade',
      children: [],
    }],
  }, {
    id: 5,
    label: '门店管理',
    icon: 's-shop',
    path: 'stores',
    children: [],
  }, {
    id: 7,
    label: '运营商管理',
    icon: 's-cooperation',
    path: 'operations',
    children: [],
  }, {
    id: 9,
    label: '员工管理',
    path: 'staff',
    icon: 's-custom',
    children: [],
  }, {
    id: 11,
    label: '商品管理',
    icon: 'goods',
    path: '',
    children: [{
      id: 12,
      label: '商品列表',
      path: 'commodity',
      children: [],
    }, {
      id: 13,
      label: '分类管理',
      path: 'categroies',
      children: [],
    }],
  }, {
    id: 14,
    label: '订单管理',
    icon: 's-order',
    path: 'order',
    children: [],
  }, {
    id: 15,
    label: '监控中心',
    path: 'monitor',
    icon: 'monitor',
    children: [],
  }, {
    id: 16,
    label: '统计分析',
    icon: 'pie-chart',
    path: '',
    children: [{
      id: 17,
      label: '设备分析',
      path: 'device-analysis',
      children: [],
    }, {
      id: 18,
      label: '营业收入报表',
      path: 'income',
      children: [],
    }],
  }, {
    id: 19,
    label: '运营管理',
    path: '',
    icon: 's-open',
    children: [{
      id: 20,
      label: '合同列表',
      path: 'contracts',
      children: [],
    }, {
      id: 21,
      label: '押金管理',
      path: 'deposit',
      children: [],
    }, {
      id: 22,
      label: '财务报表',
      path: 'finacial-statement',
      children: [],
    }],
  }, {
    id: 23,
    label: '信息发布管理',
    path: 'deliver',
    icon: 'info',
    children: [],
  }, {
    id: 25,
    label: '系统管理',
    icon: 's-platform',
    path: '',
    children: [{
      id: 26,
      label: '用户管理',
      path: 'users',
      children: [],
    }, {
      id: 27,
      label: '组织管理',
      path: '/organizations',
      children: [],
    }, {
      id: 28,
      label: '职位管理',
      path: 'positions',
      children: [],
    }, {
      id: 29,
      label: '用户信息',
      path: 'user-info',
      children: [],
    }, {
      id: 30,
      label: '操作日志',
      path: 'logs',
      children: [],
    }],
  }, {
    id: 31,
    label: '台账管理',
    path: '',
    icon: 'notebook-1',
    children: [{
      id: 32,
      label: '销售台账',
      path: 'sale-statement',
      children: [],
    }, {
      id: 33,
      label: '运营商台账',
      path: 'operator-statement',
      children: [],
    }],
  }
]

export default menu

