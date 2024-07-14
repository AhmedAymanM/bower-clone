export function getFormattedCount(count: number | bigint) {
  const formatter = Intl.NumberFormat('en', { notation: 'compact' })

  const formattedCount = formatter.format(count).toLowerCase()

  return formattedCount
}
