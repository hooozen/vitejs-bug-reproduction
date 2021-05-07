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

function remove(id:string, config?: $AxiosRequestConfig) {
  return axios('delete', '/admin/store/delete', {id}, config) 
}

function getByKeyword(params: StoreQueryParams, config?: $AxiosRequestConfig) {
  return axios('post', '/admin/store/getByKeyword', params, config)
}

export { getByKeyword, remove }
