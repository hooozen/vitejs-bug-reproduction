import $axios from './index'

function login(data: any, params: any) {
  return $axios.post('/admin/login', data, params)
}

function verificationCode(data: any, params: any) {
  return $axios.get('/admin/login', data, params)
}

export { login, verificationCode }
