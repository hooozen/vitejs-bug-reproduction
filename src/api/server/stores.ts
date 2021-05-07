import { AxiosPromise } from 'axios'
import { $AxiosRequestConfig, post } from '../axios'
import { PagingQueryParams } from './interface'

interface StoreQueryParams extends PagingQueryParams {
  name?: string,
}

function getByKeyword(params: StoreQueryParams, config?: $AxiosRequestConfig) {
  return post('/admin/store/getByKeyword', params, config)
}

export { getByKeyword }
