import { AxiosPromise } from 'axios'
import axios, { $AxiosRequestConfig } from '../axios'

export interface DeviceServiceAddParams {
  callType: string,
  description: string,
  deviceTypeId: string | number,
  identifier: string,
  inputParams: [
    {
      dataType: {
        dataSpecsDefault: string,
        dataSpecsLength: string,
        dataSpecsMax: string,
        dataSpecsMin: string,
        dataSpecsSize: string,
        dataSpecsStep: string,
        dataSpecsUnit: string,
        dataSpecsUnitName: string,
        id: string | number,
        type: string
      },
      id: string | number,
      identifier: string,
      name: string
    }
  ],
  name: string,
  outputData: [
    {
      dataType: {
        dataSpecsDefault: string,
        dataSpecsLength: string,
        dataSpecsMax: string,
        dataSpecsMin: string,
        dataSpecsSize: string,
        dataSpecsStep: string,
        dataSpecsUnit: string,
        dataSpecsUnitName: string,
        id: string | number,
        type: string
      },
      id: string | number,
      identifier: string,
      name: string
    }
  ],
  required: string | number
}

export interface DeviceServiceUpdateParams extends DeviceServiceAddParams {
  id: string | number
}

function getById(id: string | number, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/device/service/getById', { id }, config)
}

function getByDeviceTypeId(id: string | number, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/device/service/getByDeviceTypeId', { id }, config)
}

function add(params: DeviceServiceAddParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/device/service/add', params, config)
}

function update(params: DeviceServiceUpdateParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('post', '/admin/device/service/update', params, config)
}

function remove(id: string | number, config?: $AxiosRequestConfig) {
  return axios('delete', '/admin/device/service/delete', { id }, config)
}

export { add, remove, update, getById, getByDeviceTypeId }