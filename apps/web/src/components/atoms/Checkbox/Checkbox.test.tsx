import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { Checkbox } from './Checkbox'

describe('Checkbox Component', () => {
  it('should render the checkbox and label', () => {
    render(<Checkbox label="Remember me" id="remember" />)
    
    expect(screen.getByLabelText('Remember me')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('should call onChange and toggle state when clicked', async () => {
    const handleChange = vi.fn()
    render(<Checkbox label="Remember me" id="remember" onChange={handleChange} />)
    
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
    
    await userEvent.click(checkbox)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('should have no accessibility violations', async () => {
    const { container } = render(<Checkbox label="Remember me" id="remember" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

