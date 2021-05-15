export default {
  fullName: [
    { required: true, message: '请输入账号名称', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入用户密码', trigger: 'blur' },
  ],
  mobile: [
    { required: true, message: '请输入手机号码', trigger: 'blur' },
  ],
  operatorId: [
    { required: true, message: '请选择运营商', trigger: 'blur' },
  ],
  position: [
    { required: true, message: '请选择职位', trigger: 'blur' },
  ],
  userPrivileges: [
    { required: true, message: '请选择权限', trigger: 'blur' },
  ]
}
