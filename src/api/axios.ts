import axios, { AxiosPromise, DeleteConfirmConfig, AxiosRequestConfig, AxiosResponse, Method } from "axios"
import { ElMessage, ElMessageBox, ElLoading } from "element-plus"
import router from "@router/index"
// import store from "@/store/index"

const api = axios.create({
  // baseURL: import.meta.env.VITE_TEST_API_BASE_URL as string,
  // baseURL: import.meta.env.VITE_MOCK_BASE_URL as string,
  baseURL: "/beer",
  timeout: 15000,
})

/*
api.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
  config = {
    ...config,
    headers: {
      token: store.getters.token,
    },
  }
  return config
}, (err) => {
  console.error(err)
  throw Error(err)
})
*/

let LOADINGSERVICE: any = null

function closeLoading() {
  try {
    LOADINGSERVICE.close()
  } catch { }
}

api.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
  if (!config.silent) LOADINGSERVICE = ElLoading.service({ background: 'rgb(0,0,0,0.4)' })
  return config
}, (err) => {
  console.error(err)
  closeLoading()
  throw Error(err)
})

api.interceptors.response.use((response: AxiosResponse<any>): AxiosPromise => {
  closeLoading()
  if (response.data.success !== undefined && !response.data.success) {
    if (response.data.code === 'token.expired') {
      ElMessage.error('身份验证过期，重新登录')
      router.push('login')
    } else {
      ElMessage.error(`接口错误：${response.data.message}`)
    }
    throw Error(response.data.message)
  }
  if (response.config.successMsg) {
    ElMessage.success(response.config.successMsg)
  }
  return response.data
}, (err) => {
  closeLoading()
  console.error(err)
  ElMessage.error(`请求出错：${err}`)
  throw Error(err)
})

const deleteConfirm = (config?: DeleteConfirmConfig) => {
  config = {
    text: '确认执行删除操作?',
    title: '提示',
    confirmButtonText: '确定',
    cancelButtonClass: '取消',
    center: false,
    ...config
  }
  return ElMessageBox.confirm(config.text!, config.title!, {
    confirmButtonText: config.confirmButtonText,
    cancelButtonClass: config.confirmButtonText,
    type: 'warning',
    center: config.center
  })
}

function $axios(method: 'delete' | 'DELETE', url: string, params: any, _config?: $AxiosRequestConfig): Promise<any> | boolean
function $axios(method: 'get' | 'GET' | 'post' | 'POST', url: string, params: any, _config?: $AxiosRequestConfig): AxiosPromise
function $axios(method: Method, url: string, params: any, _config?: $AxiosRequestConfig): Promise<any> | boolean | AxiosPromise {
  let config = typeof _config === "string" ? { successMsg: _config } : _config
  if (method === "post") config = { ...config, data: params }
  else config = { ...config, params }
  if (method === 'delete') {
    return deleteConfirm(config.confirmConfig).then(() => {
      return api({ method, url, ...config })
    }).catch((err) => {
      return Promise.reject(err)
    })
  }
  return api({ method, url, ...config })
}

const post = (url: string, params: any, config?: Object | string): AxiosPromise => {
  if (typeof config == "string") config = { successMsg: config }
  return api.post(url, params, config)
}

const get = (url: string, params: any, config?: Object | string): AxiosPromise => {
  if (typeof config == "string") config = { successMsg: config }
  return api.get(url, { params, ...config })
}

export type $AxiosRequestConfig = AxiosRequestConfig | String

export interface ListParams {
  pageSize: number
  pageNum: number
}

export { post, get }

export default $axios
