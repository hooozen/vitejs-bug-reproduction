
const orderBy: OptionData[] = [{
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
  value: '',
  label: '在线状态'
}, {
  value: true,
  label: '在线'
}, {
  value: false,
  label: '离线'
}]

const status: OptionData[] = [{
  value: '',
  label: '设备状态'
}, {
  value: 0,
  label: '正常'
}, {
  value: 1,
  label: '预警'
}, {
  value: 2,
  label: '故障'
}]

const isActive: OptionData[] = [{
  value: '',
  label: '激活状态'
}, {
  value: true,
  label: '是'
}, {
  value: false,
  label: '否'
}]

export default { orderBy, isOnline, type, status, isActive }
