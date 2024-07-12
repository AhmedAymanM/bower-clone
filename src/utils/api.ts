import { env } from '@/utils/env'

export async function request<TResponse>(
  url: string,
  init?: RequestInit
): Promise<TResponse> {
  const response = await fetch(env.API_URL + url, init)

  if (!response.ok) throw new Error(response.statusText)

  const data = await response.json()
  return data
}

export const api = {
  get: <TResponse>(url: string) => request<TResponse>(url),

  post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
    request<TResponse>(url, { method: 'Post', body: JSON.stringify(body) }),
}

