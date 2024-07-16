import { act, renderHook } from '@testing-library/react'

import { useToggle } from '../useToggle'

describe('useToggle hook', () => {
  test('returns default value if not provided', () => {
    const { result } = renderHook(() => useToggle())

    expect(result.current[0]).toBe(false)
  })

  test('returns default value if provided', () => {
    const { result } = renderHook(() => useToggle(true))

    expect(result.current[0]).toBe(true)
  })

  test('toggles value when toggle function is called', () => {
    const { result } = renderHook(() => useToggle())

    act(() => result.current[1]())
    expect(result.current[0]).toBe(true)

    act(() => result.current[1]())
    expect(result.current[0]).toBe(false)
  })
})
