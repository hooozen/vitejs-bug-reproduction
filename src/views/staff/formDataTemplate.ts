import { AddParams } from '@api/server/staff'
import moment from 'moment'

export interface FormData extends AddParams {
  _joinedDate?: Date,
  _censusDistrict?: Array<string>
  _houseDistrict?: Array<string>
}

const template: FormData = {
  censusAddress: '',
  censusArea: '',
  censusCity: '',
  censusProvince: '',
  censusStreet: '',
  department: '',
  education: '',
  fullName: '',
  houseAddress: '',
  houseArea: '',
  houseCity: '',
  houseProvince: '',
  houseStreet: '',
  identityNo: '',
  joinedDate: '',
  mobile: '',
  nation: '',
  operatorId: '',
  post: '',
  profilePhoto: '',
  sex: 1,
}

const generateFormData = (_formData: FormData): FormData => {
  return {
    ..._formData,

    set _joinedDate(value: Date) {
      this.joinedDate = moment(value).format('YYYY-MM-DD')
    },

    get _joinedDate() {
      this.joinedDate = this.joinedDate || moment().format('YYYY-MM-DD')
      return new Date(this.joinedDate)
    },


    set _censusDistrict(value: string[]) {
      this.censusProvince = value[0] || ''
      this.censusCity = value[1] || ''
      this.censusArea = value[2] || ''
      this.censusStreet = value[3] || ''
    },
    get _censusDistrict() {
      return [this.censusProvince, this.censusCity, this.censusArea, this.censusStreet].filter(item => item)
    },

    set _houseDistrict(value: string[]) {
      this.houseProvince = value[0] || ''
      this.houseCity = value[1] || ''
      this.houseArea = value[2] || ''
      this.houseStreet = value[3] || ''
    },
    get _houseDistrict() {
      return [this.houseProvince, this.houseCity, this.houseArea, this.houseStreet].filter(item => item)
    },

  }
}

const blankFormData = generateFormData(template)

export { blankFormData, generateFormData }
