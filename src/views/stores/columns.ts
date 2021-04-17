const columns: TableColumnData[] = [{
  label: '组织代码',
  sortable: true,
  prop: 'code',
}, {
  label: '门店名称',
  sortable: true,
  prop: 'name',
}, {
  label: '门店类型',
  prop: 'type',
}, {
  label: '门店状态',
  prop: 'status',
}, {
  label: '联系人',
  prop: 'owner',
}, {
  label: '联系电话',
  prop: 'tel'
}, {
  label: '门店地址',
  prop: 'address'
}, {
  label: '代理商',
  prop: 'agent'
}, {
  label: '注册时间',
  prop: 'registerDate'
}]

export default columns
