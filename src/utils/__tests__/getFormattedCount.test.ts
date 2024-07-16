import { getFormattedCount } from '../getFormattedCount'

const input = 5000000 // 5 million
const compactCountResult = '5m'
const standardCountResult = '5,000,000'

describe('getFormattedCount function', () => {
  test('no notation provided', () => {
    const result = getFormattedCount(input)

    expect(result).to.equal(compactCountResult)
  })
  test('display results in compact notation', () => {
    const result = getFormattedCount(input, 'compact')

    expect(result).to.equal(compactCountResult)
  })
  test('display results in standard notation', () => {
    const result = getFormattedCount(input, 'standard')

    expect(result).to.equal(standardCountResult)
  })
})
