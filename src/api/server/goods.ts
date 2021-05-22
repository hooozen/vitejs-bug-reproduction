import { AxiosPromise } from 'axios'
import axios, { $AxiosRequestConfig, post } from '../axios'
import { PagingQueryParams } from './interface'

export interface GoodsQueryParams extends PagingQueryParams {
  categoryId?: number | string
  code?: string
  createTimeEnd?: string
  createTimeStart?: string
  priceEnd?: number | string
  priceStart?: number | string
  salesEnd?: number | string
  salesStart?: number | string
  status?: number | string
  stockEnd?: number | string
  stockStart?: number | string
  title?: string
}

export interface GoodsAddParams {
  categoryId?: number | string
  code?: string
  goodsPhoto: string
  price: string
  specification?: string
  status?: number | string
  stock: string
  title: string
}

export interface GoodsUpdateParams extends GoodsAddParams {
  id: number | string
}

function add(params: GoodsAddParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/goods/add', params, config)
}
function update(params: GoodsAddParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/goods/update', params, config)
}


function remove(id: string, config?: $AxiosRequestConfig) {
  return axios('delete', '/admin/goods/delete', { id }, config)
}

function getByKeyword(params: GoodsQueryParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/goods/getByKeyword', params, config)
}

export { getByKeyword, remove, add, update }