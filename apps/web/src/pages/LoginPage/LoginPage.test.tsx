import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import { LoginPage } from './LoginPage'

describe('LoginPage Component', () => {
  it('should render the entire login page', () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email ou usuário')).toBeInTheDocument()
    expect(screen.getByLabelText('Senha')).toBeInTheDocument()

    const bannerImg = screen.getByRole('img', {
      name: 'Conecte-se com desenvolvedores do mundo todo na plataforma CodeConnect'
    })
    expect(bannerImg).toBeInTheDocument()
    expect(bannerImg).toHaveAttribute('src', '/login-banner.png')
  })

  it('should have no accessibility violations', async () => {
    const { container } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

