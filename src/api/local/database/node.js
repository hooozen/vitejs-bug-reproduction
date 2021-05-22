const fs = require('fs')

const data = fs.readFileSync('./3LevelDistrictArray.json').toString()

const districts = JSON.parse(data)

const provinces = districts[0]
const cities = districts[1]
const areas = districts[2]

const _areas = areas.map(a => ({
  value: a.id,
  label: a.fullname,
}))

const _cities = cities.map(c => {
  const res = {
    value: c.id,
    label: c.fullname,
  }
  if (c.cidx && c.cidx.length) res.children = _areas.slice(c.cidx[0], c.cidx[1] + 1)
  else res.children = []
  return res
})

const _provinces = provinces.map(c => {
  const res = {
    value: c.id,
    label: c.fullname,
  }
  if (c.cidx && c.cidx.length) res.children = _cities.slice(c.cidx[0], c.cidx[1] + 1)
  else res.children = []
  return res
})

