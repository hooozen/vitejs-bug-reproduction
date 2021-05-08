import provinces from './database/provinces'
import cities from './database/cities'
import { District } from './types'

function getProvinceByCode(code: string): District | undefined {
  return provinces.find(p => p.id == code)
}

function getCityByCode(code: string): District | undefined {
  return cities.find(c => c.id == code)
}

function getRoughAddress(province: string, city: string): string {
  return `${getProvinceByCode(province)?.fullname || ''}${getProvinceByCode(city)?.fullname || ''}`
}

export { getProvinceByCode, getCityByCode, getRoughAddress }
