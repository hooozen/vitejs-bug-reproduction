import { AxiosPromise } from 'axios'
import axios, { $AxiosRequestConfig } from '../axios'

export interface QueryParams {
  keyword?: string,
  keywordType?: number,
  addressProvince?: string,
  current: number,
  size: number,
}

export interface AddParams {
  logo?: string,
  status: string | number,
  systemName?: string,
  account: string
  accountBank: string
  address: string
  addressArea: string
  addressCity: string
  addressProvince: string
  addressStreet: string
  businessLicense: string
  code: string
  contacts: string
  description: string
  latitude: string
  longitude: string
  name: string
  socialCreditCode: string
  tel: string
}

export interface UpdateParams extends AddParams {
  id: string
}

function getByKeyword(params: QueryParams, config?: $AxiosRequestConfig) {
  return axios('post', 'admin/operator/getOperatorByKeyword', params, config)
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

