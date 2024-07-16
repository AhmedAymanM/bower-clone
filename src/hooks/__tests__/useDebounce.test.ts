import { act, renderHook } from '@testing-library/react'

import { useDebounce } from '../useDebounce'

describe('useDebounce hook', () => {
  test('returns initial value', () => {
    const { result } = renderHook(() => useDebounce('test', 100))

    expect(result.current).toBe('test')
  })

  test('returns debounced value', () => {
    vi.useFakeTimers()
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 100),
      {
        initialProps: { value: 'test' },
      }
    )

    expect(result.current).toBe('test')

    rerender({ value: 'test2' })
    expect(result.current).toBe('test')
    rerender({ value: 'test3' })

    act(() => {
      vi.advanceTimersByTime(100)
    })

    expect(result.current).toBe('test3')
  })
})
