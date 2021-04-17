import { AxiosPromise } from 'axios'
import { $AxiosRequestConfig, post } from '../axios'
import { ListParams } from './interface'

function devices(data: ListParams, params: $AxiosRequestConfig): AxiosPromise {
  return post('/devices', data, params)
}

export { devices }
