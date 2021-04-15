import { $AxiosRequestConfig, post } from '../axios'

export interface staffParams {
  orderBy?: string,
  orderType?: string,
  pageNum?: number,
  pageSize?: number
}

function staff(data: staffParams, config: $AxiosRequestConfig) {
  data.pageNum = data.pageNum || 1
  data.pageSize = data.pageSize || 10
  data.orderBy = data.orderBy || ''
  data.orderType = data.orderType || ''
  return post('/admin/employee/list', data, config)
}


export { staff }

