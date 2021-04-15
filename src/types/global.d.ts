import { AxiosRequestConfig } from 'axios'

interface TableColumnData {
  prop: string,
  label: string,
}

interface Window {
  TMap: any,
  initMap: any
}

declare module 'axios' {
  export interface AxiosRequestConfig {
    successMsg?: string
  }
}

