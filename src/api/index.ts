import axios, { AxiosPromise, AxiosProxyConfig, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus';
import store from '@store/index'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
  timeout: 15000,
})

api.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig=> {
  console.log(config)
  config = {
    ...config,
    headers: {
      token: store.state.token
    }
  }
  console.log(config)
  return config
}, err => {
  console.error(err)
  throw Error(err)
})

api.interceptors.response.use((response: AxiosResponse<any>): AxiosPromise => {
  console.log(store.state.token)
  if (response.data.success !== undefined && !response.data.success) {
    console.log(response.data.success)
    // hanld error message
    ElMessage.error(`接口错误：${response.data.message}`)
    throw Error(response.data.message)
  }
  if (response.config.successMsg) {
    ElMessage.success(response.config.successMsg)
  }
  return response.data;
}, err => {
  console.error(err);
  ElMessage.error(`请求出错：${err}`)
})

const post = (url: string, params: any, config?: Object | string): AxiosPromise => {
  if (typeof config == 'string') config = { successMsg: config }
  return api.post(url, params, config)
}

const get = (url: string, params: any, config?: Object | string): AxiosPromise => {
  if (typeof config == 'string') config = { successMsg: config }
  return api.get(url, {
    params,
    ...config
  })
}

export type $AxiosRequestConfig = Object | String

export { post, get }

enum Apis {
  Devices = 'devices',
  Login = 'login',
  staff = 'staff',
}

const server = (name: Apis, data?: any): AxiosPromise => {
  return api.post(name, data)
}

export default api
