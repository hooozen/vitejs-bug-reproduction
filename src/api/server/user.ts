import { AxiosPromise } from 'axios'
import axios, { $AxiosRequestConfig } from '../axios'

function currentUser(config?:$AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/user/curentUser', {}, config)
}

export { currentUser }
