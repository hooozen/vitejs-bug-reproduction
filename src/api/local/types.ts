export interface District {
  id: string
  name?: string
  fullname: string
  pinyin?: string[]
  location?: {
    lat: number,
    lng: number
  }
  cidx?: number[]
}

export interface DistrictNode extends District {
  children?: DistrictNode[]
}
