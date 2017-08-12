import {
  defaultTo, flow, isString, isPlainObject, map, merge, mergeAll, propertyOf, reduce, split,
} from 'lodash/fp'

import tinycolor from 'tinycolor2'

export const grey = tinycolor({ r: 220, g: 220, b: 220 })

export function boxShadow(color = grey) {
  return { boxShadow: `0 0 .2em 0 ${color.setAlpha(0.2).toRgbString()}` }
}

export const processString = styleObj => flow(
  split(' '),
  map(flow(propertyOf(styleObj), defaultTo({}))),
  mergeAll,
)
// styleBuilder with default styles defined above partially applied.
// Example: css('static top0 p0 m3') == { position: 'static', top: 0, padding: 0, margin: '3rem' }
export const reducer = styleObj => (res = {}, item) => {
  if (!item) return res
  if (isPlainObject(item)) return merge(res, item)
  if (isString(item)) return merge(res, processString(styleObj)(item))
  return res
}
// Default export is a function that converts className string above.
export default styleObj => flow(Array, reduce(reducer(styleObj), undefined))
