import { AxiosPromise } from 'axios'
import axios, { $AxiosRequestConfig } from '../axios'

export interface DeviceEventAddParams {
  description: string
  deviceTypeId: string | number
  id: string | number
  identifier: string
  method: string
  name: string
  outputData: [
    {
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
      }
      id: string | number
      identifier: string
      name: string
    }
  ]
  required: string | number
  type: string
}

export interface DeviceEventUpdateParams extends DeviceEventAddParams {
  id: string | number
}

function getById(id: string | number, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/device/event/getById', { id }, config)
}

function getByDeviceTypeId(id: string | number, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/device/event/getByDeviceTypeId', { id }, config)
}

function add(params: DeviceEventAddParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/device/event/add', params, config)
}

function update(params: DeviceEventUpdateParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/device/event/update', params, config)
}

function remove(id: string | number, config?: $AxiosRequestConfig) {
  return axios('delete', '/admin/device/event/delete', { id }, config)
}

export { add, remove, update, getById, getByDeviceTypeId }