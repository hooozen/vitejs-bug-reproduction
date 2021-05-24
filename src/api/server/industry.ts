import { AxiosPromise } from "axios"
import axios, { $AxiosRequestConfig } from "../axios"

interface GetByParentIdParam {
  parentId: number
}

function getByParentId(params: GetByParentIdParam, config?: $AxiosRequestConfig): AxiosPromise {
  return axios("get", "/admin/industry/getByParentId", params, config)
}

interface GetByKeywordParams {
  keyword: string
}

function getByKeyword(params: GetByKeywordParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/industry/getByKeyword', params, config)
}

function getAll() {
  return getByKeyword({ keyword: '' })
}

function getTree(parentId: number, config?: $AxiosRequestConfig): AxiosPromise {
  return axios('get', '/admin/industry/getTreeByParentId', { parentId }, config)
}

interface AddParams {
  code: string,
  name: string,
  parentId: string
}

function add(data: AddParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios("post", "/admin/industry/add", data, config)
}

interface UpdateParams extends AddParams {
  id: string
}

function update(data: UpdateParams, config?: $AxiosRequestConfig): AxiosPromise {
  return axios("post", "/admin/industry/update", data, config)
}

interface RemoveParam {
  id: string
}

function remove(params: RemoveParam, config?: $AxiosRequestConfig): Promise<any> | boolean {
  return axios("delete", "/admin/industry/delete", params, config)
}

export { getByKeyword, getAll, add, getByParentId, update, remove, getTree }
