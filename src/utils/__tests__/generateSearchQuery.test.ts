import { generateSearchQuery } from '../generateSearchQuery'

const result = '?q=test&page=1'

describe('generateSearchQuery function', () => {
  test('params is undefined', () => {
    const input = generateSearchQuery(undefined)

    expect(input).to.equal(undefined)
  }),
    test('params is string', () => {
      const input = generateSearchQuery(result)

      expect(input).to.equal(result)
    }),
    test('params is URLSearchParams', () => {
      const input = generateSearchQuery(new URLSearchParams(result))

      expect(input).to.equal(result)
    }),
    describe('object search query', () => {
      test('params is object', () => {
        const input = generateSearchQuery({
          q: 'test',
          page: '1',
        })

        expect(input).to.equal(result)
      }),
        test('params is empty object', () => {
          const input = generateSearchQuery({})

          expect(input).to.equal('')
        }),
        test('params is object with undefined keys', () => {
          const input = generateSearchQuery({
            q: 'test',
            page: '1',
            hello: undefined,
          })

          expect(input).to.equal(result)
        })
    })
})
