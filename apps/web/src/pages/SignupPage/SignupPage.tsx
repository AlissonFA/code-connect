import React, { useEffect } from 'react'
import { AuthBanner } from '../../components/organisms/AuthBanner/AuthBanner'
import { SignupForm, type SignupFormData } from '../../components/organisms/SignupForm/SignupForm'
import { AuthTemplate } from '../../components/templates/AuthTemplate/AuthTemplate'

export const SignupPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Cadastro | CodeConnect'

    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    metaDescription?.setAttribute(
      'content',
      'Crie sua conta na CodeConnect para se conectar com desenvolvedores e compartilhar seus projetos.'
    )
  }, [])

  const handleSignupSubmit = (data: SignupFormData) => {
    console.log('Signup submitted:', data)
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
      form={<SignupForm onSignupSubmit={handleSignupSubmit} />}
    />
  )
}
