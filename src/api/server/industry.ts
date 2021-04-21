import { AxiosPromise } from "axios"
import axios, { $AxiosRequestConfig } from "../axios"

interface GetByParentIdParam {
  parentId: number
}

function getByParentId(params: GetByParentIdParam, config?: $AxiosRequestConfig): AxiosPromise {
  return axios("get", "/admin/industry/getByParentId", params, config)
}

interface GetByKeyWordParams {
  keyWord: string
}

function getByKeyWord(params: GetByKeyWordParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/industry/geByKeyWord', params, config)
}

function getAll() {
  return getByKeyWord({ keyWord: '' })
}

function getTree(params: { parentId: number }, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/industry/getTreeByParentId', params, config)
}

interface AddParams {
  code: string,
  name: string,
  parentId: number
}

function add(data: AddParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios("post", "/admin/industry/add", data, config)
}

interface UpdateParams extends AddParams {
  id: number
}

function update(data: UpdateParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios("post", "/admin/industry/update", data, config)
}

interface RemoveParam {
  id: number
}

function remove(params: RemoveParam, config?: $AxiosRequestConfig): Promise<any> | boolean {
  return axios("delete", "/admin/industry/delete", params, config)
}

export { getByKeyWord, getAll, add, getByParentId, update, remove, getTree }
