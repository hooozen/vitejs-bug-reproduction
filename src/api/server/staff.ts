import { $AxiosRequestConfig, post } from '../axios'
import { ListParams } from './interface'


function staff(data: ListParams, config: $AxiosRequestConfig) {
  data.pageNum = data.pageNum || 1
  data.pageSize = data.pageSize || 10
  data.orderBy = data.orderBy || ''
  data.orderType = data.orderType || ''
  return post('/admin/employee/list', data, config)
}


export { staff }

