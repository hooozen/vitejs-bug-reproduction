import $axios from './index'

function devices(data: any, params: Object | String) {
  if (typeof params == 'string') params = { successMsg: params }
  return $axios.post('/devices', data, { successMsg: '', ...params })
}

export { devices }
