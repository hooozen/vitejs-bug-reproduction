import { AxiosPromise } from 'axios'
import axios, { $AxiosRequestConfig, post } from '../axios'
import { PagingQueryParams } from './interface'

export interface StoreQueryParams extends PagingQueryParams {
  addressProvince?: string
  code?: string
  contacts?: string
  createTime?: string
  status?: number | string
  tag?: string
  tel?: string
  name?: string
}

export interface AddParams {
  account?: string
  accountBank?: string
  address: string
  addressArea: string
  addressCity: string
  addressProvince: string
  addressStreet: string
  businessLicense: string
  socialCreditCode: string
  code?: string
  contacts: string
  description?: string
  latitude: string
  longitude: string
  name: string
  openingTimeEnd: string
  openingTimeStart: string
  operatorId?: number | string
  orgId: number | string
  photo?: string
  status: number | string
  tag?: string
  tel: string
}

export interface UpdateParams extends AddParams {
  id: string | number
}

function remove(id: string, config?: $AxiosRequestConfig) {
  return axios('delete', '/admin/store/delete', { id }, config)
}

function getByKeyword(params: StoreQueryParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/store/getByKeyword', params, config)
}

function add(params: AddParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/store/add', params, config)
}

function update(params: UpdateParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/store/update', params, config)
}

function getById(id: string, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/store/getById', { id }, config)
}

export { add, update, getByKeyword, remove, getById }
