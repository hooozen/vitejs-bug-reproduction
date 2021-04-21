export default {
  name: [
    { required: true, message: '请输入名称', trigger: 'blur' },
  ],
  code: [
    { required: true, message: '请输入组织代码', trigger: 'blur' },
  ],
  contacts: [
    { required: true, message: '请输入联系人', trigger: 'blur' },
  ],
  tel: [
    { required: true, message: '请输入电话', trigger: 'blur' },
  ],
  address: [
    { required: true, message: '请输入地址', trigger: 'blur' },
  ],
  addressArea: [
    { required: true, message: '请选择经营范围', trigger: 'blur' },
  ]
}
