import React from 'react'
import { Divider } from '../../atoms/Divider/Divider'
import { SocialButton } from '../../atoms/SocialButton/SocialButton'

interface SocialLoginGroupProps {
  onGithubLogin?: () => void;
  onGoogleLogin?: () => void;
  className?: string;
}

export const SocialLoginGroup: React.FC<SocialLoginGroupProps> = ({
  onGithubLogin,
  onGoogleLogin,
  className = ''
}) => {
  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      <Divider text="ou entre com outras contas" />
      <div className="flex items-center gap-8 justify-center">
        <SocialButton
          iconSrc="/Github.png"
          label="Github"
          onClick={onGithubLogin}
        />
        <SocialButton
          iconSrc="/Google.png"
          label="Gmail"
          onClick={onGoogleLogin}
        />
      </div>
    </div>
  )
}
