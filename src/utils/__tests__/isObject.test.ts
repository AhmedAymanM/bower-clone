import { isObject } from '../isObject'

describe('isObject', () => {
  test('returns true for objects', () => {
    expect(isObject({})).toBe(true)
    expect(isObject({ test: 'test' })).toBe(true)
  })

  test('returns false for non-objects', () => {
    expect(isObject(null)).toBe(false)
    expect(isObject(undefined)).toBe(false)
    expect(isObject(true)).toBe(false)
    expect(isObject('test')).toBe(false)
    expect(isObject(123)).toBe(false)
    expect(isObject(() => {})).toBe(false)
    expect(isObject([])).toBe(false)
    expect(isObject(NaN)).toBe(false)
    expect(isObject(new Date())).toBe(false)
  })
})
