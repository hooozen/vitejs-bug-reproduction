import { AxiosPromise } from 'axios'
import { $AxiosRequestConfig, post } from '../axios'
import { ListParams } from './interface'

function stores(data: ListParams, params: $AxiosRequestConfig): AxiosPromise {
  return post('/devices', data, params)
}

export { stores }
