import { AddParams } from '@api/server/device'

export interface LocalFormData extends AddParams {
  id?: string | number,
  _position?: Array<string> | Array<number>
}

const emptyForm: any = {
  authCode: '',
  name: '',
  sequence: '',
  store: {
    id: '',
  },
  deviceType: {
    id: '',
  },
  latitude: undefined,
  longitude: undefined,
}

const generateLocalFormData = (deviceInfo: any, id?: string | number): LocalFormData => {
  return {
    id,
    name: deviceInfo.name,
    authCode: deviceInfo.authCode,
    sequence: deviceInfo.sequence,
    storeId: deviceInfo.store.id,
    deviceTypeId: deviceInfo.deviceType.id,

    set _position(value: number[] | string[]) {
      this.latitude = value[0].toString() || '39.90689'
      this.longitude = value[1].toString() || '116.3976'
    },
    get _position() {
      if (!this.latitude) this.latitude = '39.90689'
      if (!this.longitude) this.longitude = '116.3976'
      return [+this.latitude, +this.longitude]
    },
  }
}

const generateFormData = (lcoalFormData: LocalFormData): AddParams => {
  const formData: any = {}
  for (const [k, v] of Object.entries(formData)) {
    if (k.substring(0, 1) === '_') continue;
    formData[k] = v
  }
  return formData
}

const emptyLocalForm = generateLocalFormData(emptyForm)

export { emptyLocalForm, generateLocalFormData, generateFormData }
