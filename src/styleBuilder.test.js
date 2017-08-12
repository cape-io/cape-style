/* global it expect */
import getStyle from './styleBuilder'
import styles from './styles'

const css = getStyle(styles)

it('creates a merged object from css string', () => {
  expect(css({}, 'm0 mt3', 'pb2')).toEqual({
    marginBottom: 0, marginLeft: 0, marginRight: 0, marginTop: '3rem', paddingBottom: '2rem',
  })
})
