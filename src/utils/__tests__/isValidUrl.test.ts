import { isValidUrl } from '../isValidUrl'

describe('isValidUrl', () => {
  test('returns true for valid URLs', () => {
    expect(isValidUrl('https://github.com/test/test')).toBe(true)
    expect(isValidUrl('https://www.google.com')).toBe(true)
  })

  test('returns false for invalid URLs', () => {
    expect(isValidUrl('test')).toBe(false)
    expect(isValidUrl('https://')).toBe(false)
    expect(isValidUrl('test.com')).toBe(false)
  })
})
