const keywordTypes: OptionData[] = [{
  value: 1,
  label: '序列号'
}, {
  value: 2,
  label: '设备名称'
}, {
  value: 3,
  label: '归属门店'
}]

const type: OptionData[] = [{
  value: 0,
  label: '全部设备'
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

const isOnline: OptionData[] = [{
  value: 1,
  label: '在线'
}, {
  value: 2,
  label: '离线'
}, {
  value: 3,
  label: '休眠'
}]

const status: OptionData[] = [{
  value: 1,
  label: '正常'
}, {
  value: 0,
  label: '预警'
}, {
  value: 2,
  label: '故障'
}]

const isActive: OptionData[] = [{
  value: 1,
  label: '是'
}, {
  value: 0,
  label: '否'
}]

export default { isOnline, type, status, isActive, keywordTypes }
