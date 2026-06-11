import React from 'react'
import { AuthTemplate } from '../../components/templates/AuthTemplate/AuthTemplate'
import { AuthBanner } from '../../components/organisms/AuthBanner/AuthBanner'
import { LoginForm } from '../../components/organisms/LoginForm/LoginForm'

export const LoginPage: React.FC = () => {
  const handleLoginSubmit = (data: { emailOrUser: string; remember: boolean }) => {
    console.log('Login submitted:', data)
    // Here we will connect with the backend API in the future
  }

  return (
    <AuthTemplate
      banner={
        <AuthBanner
          imageSrc="/login-banner.png"
          alt="Conecte-se com desenvolvedores do mundo todo na plataforma CodeConnect"
        />
      }
      form={<LoginForm onLoginSubmit={handleLoginSubmit} />}
    />
  )
}
