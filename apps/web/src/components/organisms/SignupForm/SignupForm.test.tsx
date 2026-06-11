import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import { SignupForm } from './SignupForm'

describe('SignupForm Organism', () => {
  it('should render all signup form elements', () => {
    render(
      <MemoryRouter>
        <SignupForm />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: 'Cadastro' })).toBeInTheDocument()
    expect(screen.getByLabelText('Nome')).toBeInTheDocument()
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument()
    expect(screen.getByLabelText('Senha')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cadastrar' })).toBeInTheDocument()
    expect(screen.getByText('Já tem conta?')).toBeInTheDocument()
    expect(screen.getByText('Faça seu login!')).toBeInTheDocument()
  })

  it('should call onSignupSubmit with input values when form is submitted', async () => {
    const handleSignupSubmit = vi.fn()
    render(
      <MemoryRouter>
        <SignupForm onSignupSubmit={handleSignupSubmit} />
      </MemoryRouter>
    )

    await userEvent.type(screen.getByLabelText('Nome'), 'Ana Silva')
    await userEvent.type(screen.getByLabelText('E-mail'), 'ana@example.com')
    await userEvent.type(screen.getByLabelText('Senha'), 'secret123')
    await userEvent.click(screen.getByRole('button', { name: 'Cadastrar' }))

    expect(handleSignupSubmit).toHaveBeenCalledTimes(1)
    expect(handleSignupSubmit).toHaveBeenCalledWith({
      name: 'Ana Silva',
      email: 'ana@example.com',
      password: 'secret123',
    })
  })
})
