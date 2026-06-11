import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { SocialLoginGroup } from './SocialLoginGroup'

describe('SocialLoginGroup Molecule', () => {
  it('should render divider and both social buttons', () => {
    render(<SocialLoginGroup />)
    
    expect(screen.getByText('ou entre com outras contas')).toBeInTheDocument()
    expect(screen.getByText('Github')).toBeInTheDocument()
    expect(screen.getByText('Gmail')).toBeInTheDocument()
  })

  it('should trigger social login handlers on click', async () => {
    const handleGithub = vi.fn()
    const handleGoogle = vi.fn()
    render(<SocialLoginGroup onGithubLogin={handleGithub} onGoogleLogin={handleGoogle} />)
    
    await userEvent.click(screen.getByRole('button', { name: /Github/i }))
    await userEvent.click(screen.getByRole('button', { name: /Gmail/i }))
    
    expect(handleGithub).toHaveBeenCalledTimes(1)
    expect(handleGoogle).toHaveBeenCalledTimes(1)
  })

  it('should have no accessibility violations', async () => {
    const { container } = render(<SocialLoginGroup />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

