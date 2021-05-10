import * as axiso from 'axios'

declare module 'axios' {
  export interface DeleteConfirmConfig {
    title?: string,
    text?: string,
    confirmButtonText?: string,
    cancelButtonClass?: string,
    center?: boolean
  }
  export interface AxiosRequestConfig {
    successMsg?: string
    confirmConfig?: DeleteConfirmConfig
    silent?: boolean
  }
}

