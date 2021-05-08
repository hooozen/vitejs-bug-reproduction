export default {
  name: [
    { required: true, message: '请输入名称', trigger: 'blur' },
  ],
  orgId: [
    { required: true, message: '请选择组织', trigger: 'blur' },
  ],
  socialCreditCode: [
    { required: true, message: '请输入组织代码', trigger: 'blur' },
  ],
  code: [
    { required: true, message: '请输入门店编码', trigger: 'blur' },
  ],
  contacts: [
    { required: true, message: '请输入联系人', trigger: 'blur' },
  ],
  _timeRange: [
    { required: true, message: '请选择营业时间', trigger: 'blur' },
  ],
  status: [
    { required: true, message: '请选择门店状态', trigger: 'blur' },
  ],
  tel: [
    { required: true, message: '请输入电话', trigger: 'blur' },
  ],
  _district: [
    { required: true, message: '请输入地址', trigger: 'blur' },
  ],
  address: [
    { required: true, message: '请输入地址', trigger: 'blur' },
  ],
  _businessScope: [
    { required: true, message: '请选择经营范围', trigger: 'blur' },
  ]
}
