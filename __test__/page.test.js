import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
describe('Page', () => {
  it('renders the index page', () => {
    const { container } = render(<Page />)
 
    const skills = screen.getByTestId('skills')
    const services = screen.getByTestId('what I do')
    const emailMe = screen.getByTestId('email me')
    expect(container).toMatchSnapshot()
    expect(skills).toBeInTheDocument()
    expect(services).toBeInTheDocument()
    expect(emailMe).toBeInTheDocument()
  })
})