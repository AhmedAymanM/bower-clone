import { env } from '@/utils/env'

export async function request<TResponse>(
  url: string,
  init?: RequestInit
): Promise<{ data: TResponse; totalCount?: number }> {
  const response = await fetch(env.API_URL + url, init)

  if (!response.ok) throw new Error(response.statusText)

  let totalCount
  if (response.headers.has('Total')) {
    totalCount = +response.headers.get('Total')!
  }

  const data = await response.json()
  return { data, totalCount }
}

export const api = {
  get: <TResponse>(url: string) => request<TResponse>(url),
}
