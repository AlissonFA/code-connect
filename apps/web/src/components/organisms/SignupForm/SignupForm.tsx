import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/Input/Input'
import { SocialLoginGroup } from '../../molecules/SocialLoginGroup/SocialLoginGroup'

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
}

interface SignupFormProps {
  onSignupSubmit?: (data: SignupFormData) => void;
}

export const SignupForm: React.FC<SignupFormProps> = ({ onSignupSubmit }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onSignupSubmit?.({ name, email, password })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[346px] flex flex-col justify-center text-left"
    >
      <div className="mb-8">
        <h1 className="text-3xl leading-tight font-extrabold text-white font-outfit">
          Cadastro
        </h1>
        <p className="text-slate-400 text-base mt-4">
          Olá! Preencha seus dados.
        </p>
      </div>

      <div className="flex flex-col mb-8 [&>div:last-child]:mb-0">
        <Input
          label="Nome"
          id="signup-name"
          placeholder="Digite seu nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
          required
        />
        <Input
          label="E-mail"
          id="signup-email"
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          required
        />
        <Input
          label="Senha"
          id="signup-password"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="new-password"
          required
        />
      </div>

      <Button type="submit" className="mb-2">
        Cadastrar <span aria-hidden="true" className="text-lg">→</span>
      </Button>

      <SocialLoginGroup />

      <div className="flex items-center justify-center mt-6 gap-2 text-sm">
        <span className="text-slate-400 font-medium">Já tem conta?</span>
        <Link
          to="/login"
          className="text-codeconnect-green hover:text-codeconnect-green-hover font-semibold transition-colors flex items-center gap-1.5"
        >
          Faça seu login!
          <span aria-hidden="true" className="text-lg leading-none">↗</span>
        </Link>
      </div>
    </form>
  )
}
