import { AxiosPromise } from 'axios'
import {$AxiosRequestConfig, post }from '../axios'

function devices(data: any, params: $AxiosRequestConfig): AxiosPromise {
  return post('/devices', data, params)
}

export { devices }
