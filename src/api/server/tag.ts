import { AxiosPromise } from 'axios';
import { $AxiosRequestConfig } from '../axios';
import { add as _add, update as _update, getByKeyword as _getByKeword, remove } from './dict'

export interface TagAddParams {
  code: string
  name: string
}

export interface TagUpdateParams extends TagAddParams {
  id: number | string
}


function add(params: TagAddParams, config?: $AxiosRequestConfig): AxiosPromise {
  return _add({ ...params, type: 1 }, config)
}

function getByKeyword(keyword?: string, config?: $AxiosRequestConfig): AxiosPromise {
  return _getByKeword({ keyword, type: 1 }, config)
}

function update(params: TagUpdateParams, config?: $AxiosRequestConfig): AxiosPromise {
  return _update({ ...params, type: 1 }, config)
}

export { add, getByKeyword, update, remove }
