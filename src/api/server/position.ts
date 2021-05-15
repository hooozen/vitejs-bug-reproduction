import { AxiosPromise } from "axios"
import axios, { $AxiosRequestConfig } from "../axios"

export interface AddParams {
  description: string,
  functionIds: number[],
  name: string
}

function add(params: AddParams, config: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/role/add', params, config)
}

interface UpdateParams extends AddParams {
  id: number,
}

function edit(params: UpdateParams, config: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/role/update', params, config)
}

interface RemoveParam {
  roleId: string
}

// 处理多同名参数接口 ?roleId=1&roleId=2
function remove(params: RemoveParam | number[], config?: $AxiosRequestConfig): Promise<any> | boolean {
  if (Array.isArray(params)) {
    const url = '/admin/role/delete?roleId=' + params.join('&roleId=')
    return axios("delete", url, {}, config)
  }
  return axios("delete", "/admin/role/delete", params, config)
}

function positions(config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/role/get', {}, config)
}

function privileges(successInfo?: string): AxiosPromise {
  return axios('get', '/admin/role/function', {}, successInfo)
}

export { edit, add, positions, privileges, remove }
