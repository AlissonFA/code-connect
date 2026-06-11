import React, { useEffect } from 'react'
import { AuthTemplate } from '../../components/templates/AuthTemplate/AuthTemplate'
import { AuthBanner } from '../../components/organisms/AuthBanner/AuthBanner'
import { LoginForm } from '../../components/organisms/LoginForm/LoginForm'

export const LoginPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Login | CodeConnect'

    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    metaDescription?.setAttribute(
      'content',
      'Faça login na CodeConnect para se conectar com desenvolvedores e compartilhar seus projetos.'
    )
  }, [])

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
