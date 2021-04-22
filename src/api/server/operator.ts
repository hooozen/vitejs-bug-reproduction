import { AxiosPromise } from 'axios'
import axios, { $AxiosRequestConfig } from '../axios'

export interface QueryParams {
  keyword?: string,
  keywordType?: number,
  current: number,
  size: number,
}

function getByKeyword(params: QueryParams, config?: $AxiosRequestConfig) {
  return axios('post', 'admin/operator/getOperatorByKeyword', params, config)
}

export interface AddParams {
  account: string
  accountBank: string
  address: string
  addressArea: string
  addressCity: string
  addressProvince: string
  addressStreet: string
  businessArea: string
  businessCity: string
  businessLicense: string
  businessProvince: string
  businessStreet: string
  code: string
  contacts: string
  description: string
  latitude: string
  longitude: string
  name: string
  orgId: string
  tel: string
}

export interface UpdateParams extends AddParams {
  id: string
}

function add(params: AddParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/operator/add', params, config)
}

function update(params: UpdateParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/operator/update', params, config)
}

function getById(id: string, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/operator/getById', { id }, config)
}

function remove(id: string, config?: $AxiosRequestConfig) {
  return axios('delete', '/admin/operator/delete', { id }, config)
}

export { getByKeyword, add, getById, remove, update }

