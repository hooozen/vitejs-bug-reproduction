import { AxiosPromise } from 'axios'
import axios, { $AxiosRequestConfig } from '../axios'

import { PagingQueryParams } from './interface'

export interface DevicesQueryParams extends PagingQueryParams {
  area?: string
  createTime?: string
  active?: 0 | 1
  name?: string
  orgId?: string
  storeId?: string
  sequence?: string
  online?: 1 | 2 | 3
  status?: 0 | 1
}

export interface AddParams {
  authCode: string,
  name: string,
  sequence: string,
  deviceTypeId: number | string,
  storeId: number | string,
}


export interface UpdateParams extends AddParams {
  id: string
}

function getByKeyword(params: DevicesQueryParams, config?: $AxiosRequestConfig) {
  return axios('post', 'admin/device/getByKeyword', params, config)
}

function add(params: AddParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/device/add', params, config)
}

function update(params: UpdateParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/device/update', params, config)
}

function getById(id: string | number, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/device/getById', { id }, config)
}

function remove(id: string, config?: $AxiosRequestConfig) {
  return axios('delete', '/admin/device/delete', { id }, config)
}

function statistics(config?: $AxiosRequestConfig) {
  return axios('get', '/admin/device/statistics', {}, config)
}

function getByStoreId(storeId: string | number, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/device/getByStoreId', { storeId }, config)
}

export { getByKeyword, add, getById, remove, update, statistics, getByStoreId }
