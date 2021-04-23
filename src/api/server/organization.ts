import { AxiosPromise } from "axios"
import axios, { $AxiosRequestConfig } from "../axios"

interface GetByParentIdParam {
  parentId: number
}

function getTree(params: { parentId: number }, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/org/getTreeByParentId', params, config)
}

interface GetByKeyWordParams {
  keyWord: string
}

function getByKeyWord(params: GetByKeyWordParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/org/geByKeyWord', params, config)
}

function getAll() {
  return getByKeyWord({ keyWord: '' })
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

export { getByKeyWord, getAll, add, getTree, update, remove }
