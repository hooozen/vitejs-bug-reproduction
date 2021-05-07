import { AddParams } from '@api/server/store'
import moment from 'moment'

interface FormData extends AddParams {
  _district: Array<string>
  _position: Array<string> | Array<number>
  _timeRange: Array<string> | Array<Date>
  _tags: string[]
}

const template: FormData = {
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
  latitude: '',
  longitude: '',
  name: '',
  openingTimeEnd: '',
  openingTimeStart: '',
  status: '',
  orgId: '',
  tel: '',

  set _tags(value: string[]) {
    this.tag = value.join(',')
  },

  get _tags() {
    return this.tag?.split(',') || []
  },

  set _timeRange(value: | string[] | Date[]) {
    console.log(value)
    this.openingTimeStart = moment(value[0]).format('YYYY-MM-DD HH:mm:ss')
    this.openingTimeEnd = moment(value[1]).format('YYYY-MM-DD HH:mm:ss')
  },

  get _timeRange() {
    const openingTimeEnd = this.openingTimeEnd ? new Date(this.openingTimeEnd) : new Date(1949, 9, 1, 17, 0)
    const openingTimeStart = this.openingTimeStart ? new Date(this.openingTimeStart) : new Date(1949, 9, 1, 8, 0)
    return [openingTimeStart, openingTimeEnd]
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
    return [this.addressProvince, this.addressCity, this.addressArea, this.addressStreet].filter(item => item)
  },

}

const generateFormData = (_formData: AddParams): FormData => {
  return {
    ..._formData,


    set _tags(value: string[]) {
      this.tag = value.join(',')
    },

    get _tags() {
      return this.tag?.split(',') || []
    },


    set _timeRange(value: | string[] | Date[]) {
      console.log(value)
      this.openingTimeStart = moment(value[0]).format('YYYY-MM-DD HH:mm:ss')
      this.openingTimeEnd = moment(value[1]).format('YYYY-MM-DD HH:mm:ss')
    },

    get _timeRange() {
      const openingTimeEnd = this.openingTimeEnd ? new Date(this.openingTimeEnd) : new Date(1949, 9, 1, 17, 0)
      const openingTimeStart = this.openingTimeStart ? new Date(this.openingTimeStart) : new Date(1949, 9, 1, 8, 0)
      return [openingTimeStart, openingTimeEnd]
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
      return [this.addressProvince, this.addressCity, this.addressArea, this.addressStreet].filter(item => item)
    },
  }
}

export { template, generateFormData }
