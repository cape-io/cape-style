/* global it expect */
import styles from './styles'

it('styles obj creates objects', () => {
  // console.log(styles)
  expect(styles.m1).toEqual({
    marginBottom: '1rem', marginLeft: '1rem', marginRight: '1rem', marginTop: '1rem',
  })
  expect(styles.m2).toEqual({
    marginBottom: '2rem', marginLeft: '2rem', marginRight: '2rem', marginTop: '2rem',
  })
  expect(styles.z4).toEqual({ zIndex: 4 })
  expect(styles.pt0p5).toEqual({ paddingTop: '0.5rem' })
  expect(styles.pb2).toEqual({ paddingBottom: '2rem' })
})
