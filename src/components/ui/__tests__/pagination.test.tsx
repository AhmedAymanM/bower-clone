import { fireEvent, render } from '@testing-library/react'

import { Pagination } from '../pagination'

const commonProps = {
  selectedPage: 1,
  totalPages: 5,
}

describe('Pagination component', () => {
  test('snapshot matches', () => {
    const { asFragment } = render(<Pagination {...commonProps} />)

    expect(asFragment()).toMatchSnapshot()
  })
  // README: ideally the snapshot should be sufficient, but for the demo both
  // tests are provided
  test('renders Pagination component correctly', () => {
    const { getByLabelText, getByText } = render(
      <Pagination {...commonProps} />
    )

    const previousPageButton = getByLabelText(/previous page/i)
    const nextPageButton = getByLabelText(/next page/i)
    const pagesNumber = getByText(/1 \/ 5/i)

    expect(previousPageButton).toBeInTheDocument()
    expect(nextPageButton).toBeInTheDocument()
    expect(pagesNumber).toBeInTheDocument()
  })

  test('renders with custom className', () => {
    const { container } = render(
      <Pagination {...commonProps} className="test" />
    )

    expect(container.querySelector('.test')).toBeInTheDocument()
  })

  test('onPageChange is triggered on navigation interaction', () => {
    const onPageChange = vi.fn()

    const { getByLabelText } = render(
      <Pagination {...commonProps} onPageChange={onPageChange} />
    )

    expect(onPageChange).toHaveBeenCalled()
    const nextPageButton = getByLabelText(/next page/i)
    fireEvent.click(nextPageButton)
    expect(onPageChange).toHaveBeenCalled()
  })

  test('renders with disabled previous button if in first page', () => {
    const { getByLabelText } = render(<Pagination {...commonProps} />)

    const previousPageButton = getByLabelText(/previous page/i)
    const nextPageButton = getByLabelText(/next page/i)

    expect(previousPageButton).toBeDisabled()
    fireEvent.click(nextPageButton)
    expect(previousPageButton).not.toBeDisabled()
  })

  test('renders with disabled next button if in last page', () => {
    const { getByLabelText } = render(
      <Pagination {...commonProps} selectedPage={commonProps.totalPages} />
    )

    const previousPageButton = getByLabelText(/previous page/i)
    const nextPageButton = getByLabelText(/next page/i)

    expect(nextPageButton).toBeDisabled()
    fireEvent.click(previousPageButton)
    expect(nextPageButton).not.toBeDisabled()
  })
})
