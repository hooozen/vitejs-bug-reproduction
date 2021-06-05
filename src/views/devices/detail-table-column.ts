const alarm: TableColumnData[] = [{
  label: '预警上报时间',
  prop: 'reportTime'
}, {
  label: '报警类型',
  prop: 'type'
}, {
  label: '门店名称',
  prop: 'name'
}, {
  label: '预警重量',
  prop: 'weight'
}]

const error: TableColumnData[] = [{
  label: '故障代码',
  prop: 'code'
}, {
  label: '建议处置方式',
  prop: 'method'
}, {
  label: '故障时间',
  prop: 'time'
}]

const workingLog: TableColumnData[] = [{
  label: '设备状态',
  prop: 'status'
}, {
  label: '发生时间',
  prop: 'time'
}, {
  label: '报文',
  prop: 'message'
}]

const store: TableColumnData[] = [{
  label: '门店名称',
  prop: 'name'
}, {
  label: '地址',
  prop: 'fulladdress'
}, {
  label: '负责人',
  prop: 'contacts'
}, {
  label: '联系方式',
  prop: 'tel'
}, {
  label: '注册时间',
  prop: 'createTime'
}, {
  label: '最后登陆时间',
  prop: 'lastLoginTime'
}]

const operationLog: TableColumnData[] = [{
  label: '用户名',
  prop: 'name'
}, {
  label: '操作内容',
  prop: 'content'
}, {
  label: '访问IP',
  prop: 'visitIP'
}, {
  label: '操作时间',
  prop: 'time'
}]

const property: TableColumnData[] = [{
  label: '参数描述',
  prop: 'name'
}, {
  label: '参数说明',
  prop: 'description'
}, {
  label: '默认值',
  prop: ''
}, {
  label: '参数范围',
  prop: 'tel'
}, {
  label: '参数值',
  prop: 'value'
}]


export default {
  alarm,
  error,
  store,
  workingLog,
  operationLog,
  property
}
