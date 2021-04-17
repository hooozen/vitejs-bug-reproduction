const region: OptionData[] = [{
  label: '全国',
  value: '0',
}, {
  label: '上海',
  value: '1'
}]

const status: OptionData[] = [{
  label: '门店状态',
  value: '0',
}, {
  label: '营业中',
  value: '1'
}, {
  label: '歇业中',
  value: '2'
}, {
  label: '闭店',
  value: '3'
}]

const type: OptionData[] = [{
  label: '酒吧',
  value: 'bar'
}, {
  label: '烧烤店',
  value: 'barbecue'
}, {
  label: '餐馆',
  value: 'restaurant'
}]

export default { region, status, type }
