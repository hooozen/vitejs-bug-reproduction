import { AxiosRequestConfig } from 'axios'

declare interface TableColumnData {
  prop: String,
  label: String,
  width?: Number
}

declare interface $AxiosRequestConfig extends AxiosRequestConfig {
  successMsg: string
}
