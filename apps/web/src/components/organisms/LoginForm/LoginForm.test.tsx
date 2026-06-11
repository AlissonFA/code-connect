import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import { LoginForm } from './LoginForm'

describe('LoginForm Organism', () => {
  it('should render all form elements', () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email ou usuário')).toBeInTheDocument()
    expect(screen.getByLabelText('Senha')).toBeInTheDocument()
    expect(screen.getByLabelText('Lembrar-me')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Login →' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Esqueci a senha' })).toBeInTheDocument()
    expect(screen.getByText('Crie seu cadastro!')).toBeInTheDocument()
  })

  it('should call onLoginSubmit with input values when form is submitted', async () => {
    const handleLoginSubmit = vi.fn()
    render(
      <MemoryRouter>
        <LoginForm onLoginSubmit={handleLoginSubmit} />
      </MemoryRouter>
    )

    const emailInput = screen.getByLabelText('Email ou usuário')
    const passwordInput = screen.getByLabelText('Senha')
    const rememberCheckbox = screen.getByLabelText('Lembrar-me')
    const submitButton = screen.getByRole('button', { name: 'Login →' })

    await userEvent.type(emailInput, 'john.doe')
    await userEvent.type(passwordInput, 'secret123')
    await userEvent.click(rememberCheckbox)
    await userEvent.click(submitButton)

    expect(handleLoginSubmit).toHaveBeenCalledTimes(1)
    expect(handleLoginSubmit).toHaveBeenCalledWith({
      emailOrUser: 'john.doe',
      remember: true,
    })
  })
})
