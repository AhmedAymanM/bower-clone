export function isValidUrl(url: string) {
  return URL.canParse(url)
}
