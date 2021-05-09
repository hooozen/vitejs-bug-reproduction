import { AxiosPromise } from 'axios'
import axios, { $AxiosRequestConfig } from '../axios'
import { PagingQueryParams } from './interface'

export interface AddParams {
  devicePhoto: string,
  name: string,
  parentId: number | string,
  sequencePrefix: string
}

export interface UpdateParams extends AddParams {
  id: number | string
}

function getByDeviceSequence(sequence: string, config?: $AxiosRequestConfig) {
  return axios('get', '/admin/device/type/getByDeviceSequence', { sequence }, config)
}

function getTreeByParentId(parentId: string | number, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/device/type/getTreeByParentId', { parentId }, config)
}

function getByKeyword(params: PagingQueryParams, config?: $AxiosRequestConfig) {
  return axios('post', 'admin/device/type/getByKeyword', params, config)
}

function add(params: AddParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/device/type/add', params, config)
}

function update(params: UpdateParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/device/type/update', params, config)
}

function getById(id: string | number, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/device/type/getById', { id }, config)
}

function remove(id: string | number, config?: $AxiosRequestConfig) {
  return axios('delete', '/admin/device/type/delete', { id }, config)
}

export { getByKeyword, add, getById, remove, update, getByDeviceSequence, getTreeByParentId }

