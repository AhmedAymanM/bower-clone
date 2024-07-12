import { isObject } from '@/utils/isObject'

export type URLSearchParamsType = URLSearchParams | string | undefined

const cleanupParams = (
  params: URLSearchParamsType | Record<string, string | undefined>
) => {
  if (params && isObject(params)) {
    Object.keys(params).forEach((key) => !params[key] && delete params[key])
  }
  return params as URLSearchParamsType | Record<string, string>
}

export function generateSearchQuery(
  params: URLSearchParamsType | Record<string, string | undefined>
) {
  if (!params) return

  const cleanedParams = cleanupParams(params)

  const queryString = new URLSearchParams(cleanedParams).toString()
  return queryString.length ? `?${queryString}` : ''
}
