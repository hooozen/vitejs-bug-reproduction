import { AxiosPromise } from 'axios'
import { post, get, $AxiosRequestConfig } from '../axios'

interface loginParams {
  loginName: string,
  password: string,
  imageCode: string
}

function login(params: loginParams, config?: $AxiosRequestConfig): AxiosPromise {
  return post('/admin/login', params, config)
}

interface verificationCodeParams {
  width: string,
  height: string
}

function verificationCode(params: verificationCodeParams, config?: $AxiosRequestConfig): AxiosPromise {
  return get('/admin/verification/code', params, { ...config, responseType: 'blob' })
}

export { login, verificationCode }
