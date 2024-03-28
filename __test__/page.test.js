import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
describe('Page', () => {
  it('renders a heading', () => {
    const { container } = render(<Page />)
 
    const text = screen.getByText('Software')
    expect(container).toMatchSnapshot()
    expect(text).toBeInTheDocument()
  })
})