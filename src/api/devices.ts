import { AxiosPromise } from 'axios'
import {$AxiosRequestConfig, post }from './index'

function devices(data: any, params: $AxiosRequestConfig): AxiosPromise {
  return post('/devices', data, params)
}

export { devices }
