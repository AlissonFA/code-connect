import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { SocialButton } from './SocialButton'

describe('SocialButton Component', () => {
  it('should render the icon and label text', () => {
    const { container } = render(<SocialButton iconSrc="/test-icon.png" label="Test Social" />)
    
    expect(screen.getByText('Test Social')).toBeInTheDocument()
    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/test-icon.png')
  })


  it('should trigger onClick when clicked', async () => {
    const handleClick = vi.fn()
    render(<SocialButton iconSrc="/test-icon.png" label="Test Social" onClick={handleClick} />)
    
    const button = screen.getByRole('button')
    await userEvent.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should have no accessibility violations', async () => {
    const { container } = render(<SocialButton iconSrc="/test-icon.png" label="Test Social" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

