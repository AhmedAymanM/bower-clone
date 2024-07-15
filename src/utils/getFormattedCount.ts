export function getFormattedCount(
  count: number | bigint,
  notation: 'standard' | 'compact' = 'compact'
) {
  const formatter = Intl.NumberFormat('en', { notation })

  const formattedCount = formatter.format(count).toLowerCase()

  return formattedCount
}
