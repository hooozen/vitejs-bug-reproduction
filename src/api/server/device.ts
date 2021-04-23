import { AxiosPromise } from 'axios'
import axios, { $AxiosRequestConfig } from '../axios'
import { PagingQueryParams } from './interface'

export interface DevicesQueryParams extends PagingQueryParams {
  active: number
  keywordType?: 1 | 2 | 3
  deviceTypeId?: number
  online?: 1 | 2 | 3
  status?: 0 | 1
}

function devices(params: DevicesQueryParams, config: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/device/getByKeyword', params, config)
}

export { devices }
