import { AxiosPromise } from 'axios'
import axios, { $AxiosRequestConfig } from '../axios'
import { PagingQueryParams } from './interface'

function currentUser(config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/user/curentUser', {}, config)
}

export interface UserQueryParams extends PagingQueryParams {
  status?: 1 | 2 | 3
  storeId?: number | string
}

function getByKeyword(params: UserQueryParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/user/getByKeyword', params, config)
}

export interface UserPrivileges {
  privilegeId: number | string,
  type: number | string

}

export interface UserAddParams {
  code: string,
  description: string,
  employeeId: number | string,
  expireDate?: string,
  loginName: string,
  mobile: string,
  operatorId: number | string,
  password: string,
  roleId: number | string,
  userPrivileges: UserPrivileges[]
}

function add(params: UserAddParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/user/add', params, config)
}

export interface UserUpdateParams extends UserAddParams {
  id: number | string,
}

function update(params: UserAddParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/user/update', params, config)
}

function getById(id: string, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/user/getById', { id }, config)
}

export { currentUser, getByKeyword, add, update, getById }
