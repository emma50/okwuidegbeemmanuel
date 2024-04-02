import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/portfolio/page'
 
describe('Portfolio Page', () => {
  it('renders the portfolio page', () => {
    const { container } = render(<Page />)
 
    const portfolio = screen.getByTestId('portfolio')
    const projects = screen.getByTestId('projects')
    expect(container).toMatchSnapshot()
    expect(portfolio).toBeInTheDocument()
    expect(projects).toBeInTheDocument()
  })
})