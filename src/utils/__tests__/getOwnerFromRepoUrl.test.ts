import { getOwnerFromRepoUrl } from '../getOwnerFromRepoUrl'

const input = 'https://github.com/facebook/react' // 5 million

describe('getOwnerFromRepoUrl function', () => {
  test('returns owner from github url correctly', () => {
    const result = getOwnerFromRepoUrl(input)

    expect(result).to.equal('facebook')
  })
  test('url is not a github url', () => {
    const result = getOwnerFromRepoUrl(
      input.replace('github.com', 'example.com')
    )

    expect(result).to.equal(undefined)
  })
})
