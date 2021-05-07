import { AxiosPromise } from 'axios'
import { $AxiosRequestConfig, post } from '../axios'
import { ListParams } from './interface'

function getByKeyword(string: string, config?: $AxiosRequestConfig) {
  return post('/admin/store/getByKeyword', { string }, config)
}

export { getByKeyword }
