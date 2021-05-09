import { AxiosPromise } from 'axios';
import { $AxiosRequestConfig } from '../axios';
import { add as _add, update as _update, getByKeyword as _getByKeword, remove } from './dict'

export interface BeerAddParams {
  code: string
  name: string
}

export interface BeerUpdateParams extends BeerAddParams {
  id: number | string
}


function add(params: BeerAddParams, config?: $AxiosRequestConfig): AxiosPromise {
  return _add({ ...params, type: 2 }, config)
}

function getByKeyword(keyword?: string, config?: $AxiosRequestConfig): AxiosPromise {
  return _getByKeword({ keyword, type: 2 }, config)
}

function update(params: BeerUpdateParams, config?: $AxiosRequestConfig): AxiosPromise {
  return _update({ ...params, type: 2 }, config)
}

export { add, getByKeyword, update, remove }
