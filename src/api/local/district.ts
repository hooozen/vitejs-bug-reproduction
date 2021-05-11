import { District } from './types'
import provinces from './database/provinces'
import cities from './database/cities'
import area from './database/areas'

function getProvinceByCode(code: string): District | undefined {
  return provinces.find(p => p.id == code)
}

function getCityByCode(code: string): District | undefined {
  return cities.find(c => c.id == code)
}

function getAreaByCode(code: string): District | undefined {
  return area.find(a => a.id == code)
}

function getAdressName(province: string, city: string, area?: string): string {
  return `${getProvinceByCode(province)?.fullname || ''}${getCityByCode(city)?.fullname || ''}${area && getAreaByCode(area)?.fullname || ''}`
}

export { getProvinceByCode, getCityByCode, getAdressName, getAreaByCode }
