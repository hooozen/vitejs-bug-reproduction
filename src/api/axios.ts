import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse, Method } from "axios"
import { ElMessage } from "element-plus"
import store from "@/store/index"

const api = axios.create({
  // baseURL: import.meta.env.VITE_API_BASE_URL as string,
  // baseURL: import.meta.env.VITE_MOCK_BASE_URL as string,
  baseURL: "/beer",
  timeout: 15000,
})

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

api.interceptors.response.use((response: AxiosResponse<any>): AxiosPromise => {
  if (response.data.success !== undefined && !response.data.success) {
    console.log(response.data.success)
    // hanld error message
    ElMessage.error(`接口错误：${response.data.message}`)
    throw Error(response.data.message)
  }
  if (response.config.successMsg) {
    ElMessage.success(response.config.successMsg)
  }
  return response.data
}, (err) => {
  console.error(err)
  ElMessage.error(`请求出错：${err}`)
})

const $axios = (method: Method, url: string, params: any, _config?: Object | string): AxiosPromise => {
  let config = typeof _config === "string" ? { successMsg: _config } : _config
  if (method === "post") config = { ...config, data: params }
  else config = { ...config, params }
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
