import { AxiosPromise } from 'axios'
import axios, { $AxiosRequestConfig } from '../axios'

function getByKeyword(keyword?: string, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/dict/geByKeyword', { keyword, type: 1 }, config)
}

export { getByKeyword }
