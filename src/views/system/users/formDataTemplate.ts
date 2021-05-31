import { UserAddParams } from '@api/server/user'
import moment from 'moment'

export interface LocalFormData extends UserAddParams {
  _expireDate?: Date,
}

const template: UserAddParams = {
  code: '',
  description: '',
  employeeId: '',
  expireDate: '',
  loginName: '',
  mobile: '',
  operatorId: '',
  password: '',
  roleId: '',
  userPrivileges: [],
}

const generateLocalFormData = (_formData: UserAddParams): LocalFormData => {
  return {
    ..._formData,

    set _expireDate(value: Date) {
      if (!value) this.expireDate = value
      else this.expireDate = moment(value).format('YYYY-MM-DD')
    },

    get _expireDate() {
      return !this.expireDate ? undefined! : new Date(this.expireDate)
    },
  }
}

const generateFormData = (_formData: LocalFormData): UserAddParams => {
  let formData: any = {}
  for (const [k, v] of Object.entries(_formData)) {
    if (k.substring(0, 1) === '_') continue
    formData[k] = v
  }
  return formData
}

const blankFormData = generateFormData(template)

export { blankFormData, generateLocalFormData, generateFormData }
