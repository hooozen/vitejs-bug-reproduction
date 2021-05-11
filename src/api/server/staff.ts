import { AxiosPromise } from 'axios'
import axios, { $AxiosRequestConfig, post } from '../axios'
import { PagingQueryParams } from './interface'

export interface StaffQueryParams extends PagingQueryParams {
  censusProvince?: string
}

export interface AddParams {
  censusAddress: string,
  censusArea: string,
  censusCity: string,
  censusProvince: string,
  censusStreet: string,
  department: string,
  education: string,
  fullName: string,
  houseAddress: string,
  houseArea: string,
  houseCity: string,
  houseProvince: string,
  houseStreet: string,
  identityNo: string,
  joinedDate: string,
  mobile: string,
  nation: string,
  operatorId: number | string,
  post: string,
  profilePhoto: string,
  sex: string
}

export interface UpdateParams extends AddParams {
  id: string | number
}

function remove(id: string, config?: $AxiosRequestConfig) {
  return axios('delete', '/admin/employee/delete', { id }, config)
}

function getByKeyword(params: StaffQueryParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/employee/getByKeyword', params, config)
}

function add(params: AddParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/employee/add', params, config)
}

function update(params: UpdateParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/employee/update', params, config)
}

function getById(id: string, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/employee/getById', { id }, config)
}

export { add, update, getByKeyword, remove, getById }