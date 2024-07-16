// README: Ideally I would avoid this separation if not needed and write
// integration/e2e tests with cypress or similar with help of stubbed/mocked
// data using tools like msw (depending on our API)

import { render } from '@testing-library/react'
import { fireEvent, screen } from '@testing-library/dom'

import { STATUS } from '@/hooks/useAsync'
import { type Project } from '@/types/api'

import { App, type AppProps } from '../App'

const stubProjects: Project[] = [
  {
    description:
      'TypeScript is a language for application scale JavaScript development',
    homepage: 'https://www.typescriptlang.org/',
    latest_stable_release_number: '5.5.3',
    name: 'typescript',
    repository_url: 'https://github.com/microsoft/TypeScript',
    stars: 99231,
  },
  {
    description: 'TypeScript definitions for node',
    latest_stable_release_number: '20.14.10',
    name: '@types/node',
    repository_url: 'https://github.com/DefinitelyTyped/DefinitelyTyped',
    stars: 47771,
  },
  {
    description: 'React package for working with the DOM.',
    latest_stable_release_number: '18.3.1',
    name: 'react-dom',
    repository_url: 'https://github.com/facebook/react-dom',
    stars: 225291,
  },
  {
    description: 'React is a JavaScript library for building user interfaces.',
    latest_stable_release_number: '18.3.1',
    name: 'react',
    repository_url: 'https://github.com/facebook/react',
    stars: 225291,
  },
  {
    description: 'Promise based HTTP client for the browser and node.js',
    latest_stable_release_number: '1.7.2',
    name: 'axios',
    repository_url: 'https://github.com/axios/axios',
    stars: 104653,
  },
]

const generateCommonProps = (props?: Partial<AppProps>) => ({
  searchQuery: '',
  sort: undefined,
  handleSortChange: vi.fn(),
  handleSearchChange: vi.fn(),
  setCurrentPage: vi.fn(),
  projects: {
    data: {
      data: stubProjects,
      totalCount: 8541079,
    },
    status: STATUS.SUCCESS,
    error: undefined,
  },
  ...props,
})

describe('App component', () => {
  test('renders the App component correctly', () => {
    const commonProps = generateCommonProps()
    const { asFragment } = render(<App {...commonProps} />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('SearchInput is rendered and triggered on search input interaction', () => {
    const commonProps = generateCommonProps()
    const { getByPlaceholderText } = render(<App {...commonProps} />)

    const searchInput = getByPlaceholderText(/search.../i)
    expect(searchInput).toBeInTheDocument()

    fireEvent.change(searchInput, { target: { value: 'test-search' } })
    expect(commonProps.handleSearchChange).toHaveBeenCalled()
    expect(searchInput).toHaveValue('test-search')
  })
  test('onSortChange is triggered on sort options interaction', () => {
    const commonProps = generateCommonProps()
    const { getByTestId } = render(<App {...commonProps} />)

    const sortOptions = getByTestId('sort-projects')
    expect(sortOptions).toBeInTheDocument()

    fireEvent.change(sortOptions, { target: { value: 'rank' } })
    expect(commonProps.handleSortChange).toHaveBeenCalled()
  })
  test('onPageChange is triggered on pagination interaction', () => {
    const commonProps = generateCommonProps()

    const { getByLabelText } = render(<App {...commonProps} />)

    const nextPageButton = getByLabelText(/next page/i)
    fireEvent.click(nextPageButton)
    expect(commonProps.setCurrentPage).toHaveBeenCalled()
  })
  test('renders the ProjectsCards grid with 5 cards', () => {
    const commonProps = generateCommonProps()
    render(<App {...commonProps} />)
    const projectsCardsGrid = screen.getByTestId(/cards-grid/i)
    expect(projectsCardsGrid).toBeInTheDocument()
    expect(projectsCardsGrid.childElementCount).toEqual(5)
  })
  test('renders project cards placeholder if projects are loading', () => {
    const commonProps = generateCommonProps({
      projects: {
        data: undefined,
        status: STATUS.LOADING,
        error: undefined,
      },
    })
    const { getAllByTestId } = render(<App {...commonProps} />)

    const projectCardPlaceholder = getAllByTestId('project-card-placeholder')
    expect(projectCardPlaceholder.length).toEqual(5)
  })
  test('renders error message if projects are errored', () => {
    const commonProps = generateCommonProps({
      projects: {
        data: undefined,
        status: STATUS.ERROR,
        error: new Error('Something went wrong'),
      },
    })
    const { getByText } = render(<App {...commonProps} />)

    const errorMessage = getByText(/Something went wrong/i)
    expect(errorMessage).toBeInTheDocument()
  }),
    test('renders messages if no projects are found', () => {
      const commonProps = generateCommonProps({
        projects: {
          data: undefined,
          status: STATUS.SUCCESS,
          error: undefined,
        },
      })
      const { getByText } = render(<App {...commonProps} />)

      const noProjectsMessage = getByText(/no projects were found/i)
      expect(noProjectsMessage).toBeInTheDocument()
    })
})
