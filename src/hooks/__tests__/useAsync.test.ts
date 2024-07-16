import { renderHook, waitFor } from '@testing-library/react'

import { STATUS, useAsync } from '../useAsync'

describe('useAsync hook', () => {
  test('returns loading status on initial render', async () => {
    const mockFn = vi.fn().mockResolvedValue('')
    const { result } = renderHook(() => useAsync(mockFn))

    expect(result.current.data).toBe(undefined)
    expect(result.current.status).toBe(STATUS.LOADING)
    expect(result.current.error).toBe(undefined)
    await waitFor(() => expect(mockFn).toHaveBeenCalledTimes(1))
  })

  test('returns data when fetching is successful', async () => {
    const mockFn = vi.fn().mockResolvedValue('test')

    const { result } = renderHook(() => useAsync(mockFn))

    expect(result.current.status).toBe(STATUS.LOADING)

    await waitFor(() => {
      expect(result.current.data).toBe('test')
      expect(result.current.status).toBe(STATUS.SUCCESS)
      expect(result.current.error).toBe(undefined)
    })
  })

  test('returns error when fetching is failed', async () => {
    const mockFn = vi.fn().mockRejectedValue(new Error())

    const { result } = renderHook(() => useAsync(mockFn))

    expect(result.current.status).toBe(STATUS.LOADING)

    await waitFor(() => {
      expect(result.current.data).toBe(undefined)
      expect(result.current.status).toBe(STATUS.ERROR)
      expect(result.current.error).toBeInstanceOf(Error)
    })
  })
})
