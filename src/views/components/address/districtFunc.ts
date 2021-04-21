const layer3 = ["11", "12", "31", "50", "71"]
const layer2 = ["81", "82"]

const getDeep = (code: string): number => {
  const precode = code.substring(0, 2)
  if (layer2.includes(precode)) return 2
  if (layer3.includes(precode)) return 3
  return 4
}

export { getDeep }