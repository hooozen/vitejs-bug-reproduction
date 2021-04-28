
const keywordTypes: OptionData[] = [{
  value: 0,
  label: '全部'
}, {
  value: 1,
  label: '组织代码'
}, {
  value: 2,
  label: '单位名称'
}]

const regions: OptionData[] = [{
  value: 0,
  label: '全部区域'
}, {
  value: 1,
  label: '2 头设备'
}, {
  value: 2,
  label: '4 头设备'
}, {
  value: 3,
  label: '6 头设备'
}]

const status: OptionData[] = [{
  value: 1,
  label: '正常营业'
}, {
  value: 2,
  label: '停止营业'
}, {
  value: 3,
  label: '考核期'
}]

export default { keywordTypes, regions, status }
