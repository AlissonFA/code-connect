import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
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
})
