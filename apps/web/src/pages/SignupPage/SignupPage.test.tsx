import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { SignupPage } from './SignupPage'

describe('SignupPage Component', () => {
  it('should render the entire signup page', () => {
    render(
      <MemoryRouter>
        <SignupPage />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: 'Cadastro' })).toBeInTheDocument()
    expect(screen.getByLabelText('Nome')).toBeInTheDocument()
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument()
    expect(screen.getByLabelText('Senha')).toBeInTheDocument()

    const bannerImg = screen.getByRole('img', {
      name: 'Conecte-se com desenvolvedores do mundo todo na plataforma CodeConnect'
    })
    expect(bannerImg).toBeInTheDocument()
    expect(bannerImg).toHaveAttribute('src', '/login-banner.png')
  })
})
