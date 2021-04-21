import { AddParams } from '@api/server/operator'

interface formData extends AddParams {
  _address: Array<string>,
  _businessScope: Array<string>
  _position: Array<string> | Array<number>
}

const template: formData = {
  account: '',
  accountBank: '',
  address: '',
  addressArea: '',
  addressCity: '',
  addressProvince: '',
  addressStreet: '',
  businessArea: '',
  businessCity: '',
  businessLicense: '',
  businessProvince: '',
  businessStreet: '',
  code: '',
  contacts: '',
  description: '',
  latitude: '',
  longitude: '',
  name: '',
  orgId: '',
  tel: '',
  set _position(value: number[] | string[]) {
    this.latitude = value[0] || 39.5427
    this.longitude = value[1] || 116.2317
  },
  get _position() {
    return [+this.latitude, +this.latitude]
  },
  set _address(value: string[]) {
    console.log(value)
    this.address = value[0] || ''
    this.addressProvince = value[1] || ''
    this.addressCity = value[2] || ''
    this.addressArea = value[3] || ''
    this.addressStreet = value[4] || ''
  },
  get _address() {
    return [this.address]
      .concat([this.addressProvince, this.addressCity, this.addressArea, this.addressStreet].filter(item => item))
  },
  set _businessScope(value: string[]) {
    this.businessProvince = value[0] || ''
    this.businessCity = value[1] || ''
    this.businessArea = value[2] || ''
    this.businessStreet = value[3] || ''
  },
  get _businessScope() {
    return [this.businessProvince, this.businessCity, this.businessArea, this.businessStreet].filter(item => item)
  }
}

export default template
