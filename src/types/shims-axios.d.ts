import * as axiso from 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    successMsg?: string
  }
}

