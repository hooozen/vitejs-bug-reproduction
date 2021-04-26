const addFormRules = {
  sequence: [{
    required: true, message: '请输入设备序列号'
  }],
  code: [{
    required: true, message: '请输入设备验证码'
  }],
  name: [{
    required: true, message: '请输入设备名称'
  }],
  store: [{
    required: true, message: '请选择归属门店'
  }]
}

export default {
  name: [
    { required: true, message: '请输入名称', trigger: 'blur' },
  ],
  orgId: [
    { required: true, message: '请输入组织代码', trigger: 'blur' },
  ],
  contacts: [
    { required: true, message: '请输入联系人', trigger: 'blur' },
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


export { addFormRules }
