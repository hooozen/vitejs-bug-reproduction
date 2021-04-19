import { AxiosPromise } from "axios"
import axios, { $AxiosRequestConfig } from "../axios"

const positions = (successInfo?: string): AxiosPromise => {
  return axios('get', '/admin/role/get', {}, successInfo)
}

const privileges = (successInfo?: string): AxiosPromise => {
  return axios('get', '/admin/role/function', {}, successInfo)
}

export { positions, privileges }
