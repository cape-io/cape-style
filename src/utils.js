import {
  flow, isArray, keys, map, merge, method, partial, range, zipObject,
} from 'lodash'

import { createObj } from 'cape-lodash'
// Takes a number or string and appends 'rem' to the end of it.
// Example: rem(1) === '1rem'
export const rem = flow(String, method('concat', 'rem'))

export function allSides(prefix = '', suffix = '', value = 0) {
  return {
    [`${prefix}Top${suffix}`]: value,
    [`${prefix}Bottom${suffix}`]: value,
    [`${prefix}Left${suffix}`]: value,
    [`${prefix}Right${suffix}`]: value,
  }
}

// Takes css defination style and a className prefix and builds out options with sizes from 0-6.
// Example: remStyleBuilder('margin', 'm') == { m0: { margin: 0 }, m0p5: { margin: '0.5rem' }, ...}
export function remStyleBuilder(style, prefix, allSidesArgs = false) {
  const sizes = {
    '0p125': 0.125,
    '0p25': 0.25,
    '0p5': 0.5,
    '0p75': 0.75,
    1: 1,
    '1p25': 1.25,
    '1p5': 1.5,
    '1p618': 1.618,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
  }
  const sizeBuilder = createObj(style)
  const zero = {
    [`${prefix}0`]: isArray(allSidesArgs) ? allSides(...allSidesArgs) : sizeBuilder(0),
  }
  const remBuilder = flow(rem,
    isArray(allSidesArgs) ? partial(allSides, ...allSidesArgs) : sizeBuilder
  )
  return merge(
    zero,
    zipObject(map(keys(sizes), key => prefix + key), map(sizes, remBuilder))
  )
}
// Define the things that should be sent to remStyleBuilder.
export const remStyles = {
  br: 'borderRadius',
  fs: 'fontSize',
  h: 'height',
  lh: 'lineHeight',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
}

// Similar to remStyleBuilder but where the value is a number instead of rem string.
// buildNumSizes('zIndex', 'z') == { z0: { zIndex: 0 }, z1: { zIndex: 1 }, z2: { zIndex: 2 } ...}
export function buildNumSizes(style, prefix, start = 0, end = 11) {
  const sizes = range(start, end)
  const sizeBuilder = createObj(style)
  return zipObject(map(sizes, key => prefix + key), map(sizes, sizeBuilder))
}
// Builds an object with the position property set to the first argument.
// Example: pos('static') == { position: 'static' }
export const algnCnt = createObj('alignContent')
export const disp = createObj('display')
export const pos = createObj('position')
export const bgColor = createObj('backgroundColor')
export const float = createObj('float')

export const floatLeft = float('left')
export const floatRight = float('right')
export const left50p = { left: '50%' }
export const top50p = { top: '50%' }
