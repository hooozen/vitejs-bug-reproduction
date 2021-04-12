import axios, { AxiosPromise, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus';

console.log(import.meta.env)

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
  timeout: 15000,
})


api.interceptors.response.use((response: AxiosResponse<any>): AxiosPromise => {
  console.log(response.config)
  if (response.data.code !== '0000') {
    // TODO hanld error message
    ElMessage.error(`接口错误：${response.data.msg}`)
  }
  if (response.config.successMsg) {
    ElMessage.success(response.config.successMsg)
  }
  return response.data;
}, err => {
  console.error(err);
  ElMessage.error(`请求出错：${err}`)
})

export default api
