import axios, { $AxiosRequestConfig } from '../axios'

const KEY = import.meta.env.VITE_TMAP_KEY


function getDistrict(parentId: string = '0', config?: $AxiosRequestConfig) {
  return axios('get', '/admin/common/district/getChildren', { parentId, key: import.meta.env.VITE_TMAP_KEY }, { silent: true, ...config })
}

export { getDistrict }
