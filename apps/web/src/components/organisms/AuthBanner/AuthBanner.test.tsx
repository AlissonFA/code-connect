import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AuthBanner } from './AuthBanner'

describe('AuthBanner Organism', () => {
  it('should render the banner image with correct attributes', () => {
    render(<AuthBanner imageSrc="/login-banner.png" alt="Login Banner" />)
    
    const img = screen.getByRole('img', { name: 'Login Banner' })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/login-banner.png')
  })
})
