export interface PagingQueryParams {
  current: number,
  size: number,
  keyword?: string,
  keywordType?: number,
}

export interface ListParams {
  orderBy?: string,
  orderType?: string,
  pageNum?: number,
  pageSize?: number,
  keyWord?: string
}

