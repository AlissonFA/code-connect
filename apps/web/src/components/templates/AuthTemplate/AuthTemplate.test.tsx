import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AuthTemplate } from './AuthTemplate'

describe('AuthTemplate Template', () => {
  it('should render both banner and form slot contents', () => {
    render(
      <AuthTemplate
        banner={<div data-testid="banner-slot">Banner Content</div>}
        form={<div data-testid="form-slot">Form Content</div>}
      />
    )
    
    expect(screen.getByTestId('banner-slot')).toBeInTheDocument()
    expect(screen.getByText('Banner Content')).toBeInTheDocument()
    
    expect(screen.getByTestId('form-slot')).toBeInTheDocument()
    expect(screen.getByText('Form Content')).toBeInTheDocument()
  })
})
