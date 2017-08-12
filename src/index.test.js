/* global test expect */
import css from './index'

test('default export css', () => {
  expect(css()).toBe(undefined)
  expect(css(''))
})
