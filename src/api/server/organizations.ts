import { AxiosPromise } from "axios"
import axios, { $AxiosRequestConfig } from "../axios"

interface GetByParentIdParam {
  parentId: number
}

function getByParentId(params: GetByParentIdParam, config?: $AxiosRequestConfig): AxiosPromise {
  return axios("get", "/admin/org/getByParentId", params, config)
}

interface AddParams {
  code: string,
  name: string,
  parentId: number
}

function add(data: AddParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios("post", "/admin/org/add", data, config)
}

interface UpdateParams extends AddParams {
  id: number
}

function update(data: UpdateParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios("post", "/admin/org/update", data, config)
}

interface RemoveParam {
  id: number
}

function remove(params: RemoveParam, config?: $AxiosRequestConfig): AxiosPromise {
  return axios("delete", "/admin/org/delete", params, config)
}

export { add, getByParentId, update, remove }
