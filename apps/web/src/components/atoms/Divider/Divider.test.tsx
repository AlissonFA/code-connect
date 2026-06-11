import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Divider } from './Divider'

describe('Divider Component', () => {
  it('should render the divider text', () => {
    render(<Divider text="or sign in with" />)
    expect(screen.getByText('or sign in with')).toBeInTheDocument()
  })

  it('should have no accessibility violations', async () => {
    const { container } = render(<Divider text="or sign in with" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

