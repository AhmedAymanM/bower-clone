// README: ideally I would use react-query or similar library to manage server
// state and caching, I don't expect this hook to work perfectly but its is
// handy as a POC

import { useState, useEffect } from 'react'

export enum STATUS {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export function useAsync<T = unknown>(asyncFn: () => Promise<T>) {
  const [status, setStatus] = useState<STATUS>(STATUS.IDLE)
  const [data, setData] = useState<Awaited<T>>()
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    setStatus(STATUS.IDLE)
    setData(undefined)
    setError(undefined)
    const fetchAsync = async () => {
      setStatus(STATUS.LOADING)

      try {
        const response = await asyncFn()
        setData(response)
        setStatus(STATUS.SUCCESS)
      } catch (error) {
        setError(error)
        setStatus(STATUS.ERROR)
      }
    }

    fetchAsync()
  }, [asyncFn])
  return { data, status, error }
}
