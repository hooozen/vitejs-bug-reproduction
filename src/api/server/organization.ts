import { AxiosPromise } from "axios"
import axios, { $AxiosRequestConfig } from "../axios"

function getTree(parentId: number, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/org/getTreeByParentId', { parentId }, config)
}

interface GetByKeywordParams {
  keyword: string
}

function getByKeyword(params: GetByKeywordParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/org/geByKeyWord', params, config)
}

function getAll() {
  return getByKeyword({ keyword: '' })
}

interface AddParams {
  code: string
  name: string
  parentId: string
}

function add(data: AddParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios("post", "/admin/org/add", data, config)
}

interface UpdateParams extends AddParams {
  id: string
}

function update(data: UpdateParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios("post", "/admin/org/update", data, config)
}

interface RemoveParam {
  id: string
}

function remove(params: RemoveParam, config?: $AxiosRequestConfig): Promise<any> | boolean {
  return axios("delete", "/admin/org/delete", params, config)
}

export { getByKeyword, getAll, add, getTree, update, remove }
