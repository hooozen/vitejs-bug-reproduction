import axios, { $AxiosRequestConfig } from '../axios'

const KEY = import.meta.env.VITE_TMAP_KEY


function getDistrict(parentId?: string, config?: $AxiosRequestConfig) {
  return axios('get', 'https://apis.map.qq.com/ws/district/v1/getchildren', { id: parentId }, config)
}

export { getDistrict }
