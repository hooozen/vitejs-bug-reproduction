import { AddParams } from '@api/server/store'
import moment from 'moment'
import { isSpecialDistrict } from '@views/components/address/districtFunc'

interface Tag {
  id: number | string,
  name: string,
  [propName: string]: any,
}

export interface FormData extends AddParams {
  createTime?: string
  _district: Array<string>
  _position: Array<string> | Array<number>
  _timeRange: Array<string> | Array<Date>
  _tags: Tag[]
  __tags: Tag[]
}

interface LocalFormData extends AddParams {
  tags: Tag[]
}

const template: LocalFormData = {
  account: '',
  accountBank: '',
  address: '',
  addressArea: '',
  addressCity: '',
  addressProvince: '',
  addressStreet: '',
  businessLicense: '',
  code: '',
  contacts: '',
  description: '',
  latitude: '39.90689',
  longitude: '116.3976',
  name: '',
  openingTimeEnd: '',
  openingTimeStart: '',
  status: '',
  orgId: '',
  tel: '',
  photo: '',
  socialCreditCode: '',
  tags: [],
}

const generateLocalFormData = (_formData: LocalFormData): FormData => {
  console.log('generateLocalFormData')
  return {
    ..._formData,


    __tags: _formData.tags,

    set _tags(value: Tag[]) {
      this.__tags = value
      this.tag = value.map((t: Tag) => t.id).join(',')
    },

    get _tags() {
      return this.__tags
    },

    set _timeRange(value: | string[] | Date[]) {
      console.log(value)
      this.openingTimeStart = moment(value[0]).format('YYYY-MM-DD HH:mm:ss')
      this.openingTimeEnd = moment(value[1]).format('YYYY-MM-DD HH:mm:ss')
    },

    get _timeRange() {
      this.openingTimeEnd = this.openingTimeEnd || "1949-10-01 17:00:00"
      this.openingTimeStart = this.openingTimeStart || "1949-10-01 09:00:00"
      return [new Date(this.openingTimeStart), new Date(this.openingTimeEnd)]
    },

    set _position(value: number[] | string[]) {
      this.latitude = value[0].toString() || '39.90689'
      this.longitude = value[1].toString() || '116.3976'
    },
    get _position() {
      if (isNaN(+this.latitude)) this.latitude = '39.90689'
      if (isNaN(+this.longitude)) this.longitude = '116.3976'
      return [+this.latitude, +this.longitude]
    },

    set _district(value: string[]) {
      this.addressProvince = value[0] || ''
      this.addressCity = value[1] || ''
      this.addressArea = value[2] || ''
      this.addressStreet = value[3] || ''
    },
    get _district() {
      const value = [this.addressProvince, this.addressCity, this.addressArea, this.addressStreet].filter(item => item)
      if (value[0] && isSpecialDistrict(value[0])) value.shift()
      return value
    },
  }
}

const generateFormData = (formData: LocalFormData) => {
  let _formData: { [key: string]: any } = {}
  for (const [k, v] of Object.entries(formData)) {
    if (k.substring(0, 1) === '_') continue
    _formData[k] = v
  }
  console.log(_formData)
}

const blankFormData = generateLocalFormData(template)

export { blankFormData, generateLocalFormData, generateFormData }
