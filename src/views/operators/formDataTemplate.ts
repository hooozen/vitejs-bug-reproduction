import { AddParams } from '@api/server/operator'

interface FormData extends AddParams {
  _district: Array<string>,
  _position: Array<string> | Array<number>
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
  orgId: '',
  tel: '',

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
