import { $AxiosRequestConfig, post } from '../axios'

interface staffConfig {
  orderBy?: string,
  orderType?: string,
  pageNum: number,
  pageSize?: number
}

function staff(data: staffConfig, params: $AxiosRequestConfig) {
  data.pageSize = data.pageSize || 10
  data.orderBy = data.orderBy || ''
  data.orderType = data.orderType || ''
  return post('/admin/employee/list', data, params)
}


export { staff }

