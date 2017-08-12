/* global test expect */
import { remStyleBuilder } from './utils'

test('remStyleBuilder', () => {
  expect(remStyleBuilder('margin', 'm', ['margin', '']).m1).toEqual({
    marginBottom: '1rem', marginLeft: '1rem', marginRight: '1rem', marginTop: '1rem',
  })
})
