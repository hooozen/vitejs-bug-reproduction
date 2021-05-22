import moment from 'moment'
import { GoodsQueryParams } from '@api/server/goods'

interface LocalGoodsQueryForm extends GoodsQueryParams {
  _dateRange?: Date[]
}

const emptyLocalQueryForm: LocalGoodsQueryForm = {
  current: 1,
  size: 10,

  set _dateRange(value: Date[] | undefined) {
    console.log(value)
    if (!value) {
      this.createTimeEnd = undefined
      this.createTimeStart = undefined
    } else {
      this.createTimeStart = moment(value[0]).format('YYYY-MM-DD')
      this.createTimeEnd = moment(value[1]).format('YYYY-MM-DD')
    }
  },
  get _dateRange() {
    if (!this.createTimeEnd || !this.createTimeStart) return undefined
    return [new Date(this.createTimeStart), new Date(this.createTimeEnd)]
  }
}

const generateQueryForm = (localQueryForm: LocalGoodsQueryForm): GoodsQueryParams => {
  const res = { ...localQueryForm }
  delete res._dateRange
  return res
}

export { emptyLocalQueryForm, generateQueryForm }



