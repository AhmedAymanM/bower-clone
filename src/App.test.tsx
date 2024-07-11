import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'

import { App } from './App'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
    const header = screen.getByText(/Vite \+ React/i)
    screen.debug(header)
    expect(header).toBeInTheDocument()
  })
})
