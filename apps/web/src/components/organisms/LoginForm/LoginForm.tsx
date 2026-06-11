import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../atoms/Button/Button'
import { Checkbox } from '../../atoms/Checkbox/Checkbox'
import { Input } from '../../atoms/Input/Input'
import { SocialLoginGroup } from '../../molecules/SocialLoginGroup/SocialLoginGroup'

interface LoginFormProps {
  onLoginSubmit?: (data: { emailOrUser: string; remember: boolean }) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLoginSubmit }) => {
  const [emailOrUser, setEmailOrUser] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onLoginSubmit?.({ emailOrUser, remember })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[400px] flex flex-col justify-center text-left"
    >
      <h1 className="text-3xl font-extrabold text-white mb-1 font-outfit">
        Login
      </h1>
      <p className="text-slate-400 text-sm mb-6">
        Boas-vindas! Faça seu login.
      </p>

      <Input
        label="Email ou usuário"
        id="emailOrUser"
        placeholder="usuario123"
        value={emailOrUser}
        onChange={(event) => setEmailOrUser(event.target.value)}
        required
      />

      <Input
        label="Senha"
        id="password"
        type="password"
        placeholder="******"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />

      <div className="flex items-center justify-between w-full mb-6">
        <Checkbox
          label="Lembrar-me"
          id="remember"
          checked={remember}
          onChange={(event) => setRemember(event.target.checked)}
          className="mb-0"
        />
        <Button variant="link" type="button" className="text-sm font-medium">
          Esqueci a senha
        </Button>
      </div>

      <Button type="submit" className="mb-6">
        Login <span className="text-lg">→</span>
      </Button>

      <SocialLoginGroup />

      <div className="flex flex-col items-center mt-8 gap-2">
        <span className="text-slate-400 text-xs font-medium">Ainda não tem conta?</span>
        <Link
          to="/signup"
          className="text-codeconnect-green hover:text-codeconnect-green-hover font-semibold transition-colors flex items-center gap-1.5 text-sm"
        >
          Crie seu cadastro!
          <svg
            className="w-4 h-4 text-codeconnect-green"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
        </Link>
      </div>
    </form>
  )
}
