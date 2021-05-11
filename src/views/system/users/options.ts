const keywordTypes: OptionData[] = [{
  value: 0,
  label: '全部'
}, {
  value: 1,
  label: '账户'
}, {
  value: 2,
  label: '姓名'
}, {
  value: 3,
  label: '职位'
}, {
  value: 4,
  label: '联系方式'
}]

const status: OptionData[] = [{
  value: 1,
  label: '未激活',
}, {
  value: 2,
  label: '已激活',
}, {
  value: 3,
  label: '已禁用',
}]

export default { keywordTypes, status }
