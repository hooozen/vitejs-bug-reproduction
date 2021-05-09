import { AxiosPromise } from 'axios'
import axios, { $AxiosRequestConfig } from '../axios'

export interface DevicePropertyAddParams {
  accessMode: string
  dataType: {
    dataSpecsDefault: string
    dataSpecsLength: string
    dataSpecsMax: string
    dataSpecsMin: string
    dataSpecsSize: string
    dataSpecsStep: string
    dataSpecsUnit: string
    dataSpecsUnitName: string
    id: string | number
    type: string
  };
  description: string
  deviceTypeId: string | number
  identifier: string
  name: string
  required: string | number
}

export interface DevicePropertyUpdateParams extends DevicePropertyAddParams {
  id: string | number
}

function getById(id: string | number, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/device/properties/getById', { id }, config)
}

function getByDeviceTypeId(id: string | number, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/device/properties/getByDeviceTypeId', { id }, config)
}

function add(params: DevicePropertyAddParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/device/properties/add', params, config)
}

function update(params: DevicePropertyUpdateParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/device/properties/update', params, config)
}

function remove(id: string | number, config?: $AxiosRequestConfig) {
  return axios('delete', '/admin/device/properties/delete', { id }, config)
}

export { add, remove, update, getById, getByDeviceTypeId }