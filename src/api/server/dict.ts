import { AxiosPromise } from 'axios'
import axios, { $AxiosRequestConfig } from '../axios'

export interface DictAddParams {
  type: number | string
  code: string
  name: string
}

export interface DictUpdateParams extends DictAddParams {
  id: number | string
}

export interface DictQueryParams {
  keyword?: string,
  type: number | string
}

function getByKeyword(params: DictQueryParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/dict/getByKeyword', params, config)
}

function add(params: DictAddParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/dict/add', params, config)
}

function remove(id: number | string, config?: $AxiosRequestConfig) {
  return axios('delete', '/admin/dict/delete', { id }, config)
}

function update(params: DictUpdateParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/dict/update', params, config)
}

export { getByKeyword, add, remove, update }
