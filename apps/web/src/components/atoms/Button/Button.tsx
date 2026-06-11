import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'link';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold transition-all duration-200 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-codeconnect-bg focus:ring-codeconnect-green active:scale-[0.98]'
  
  const variants = {
    primary: 'w-full py-3 px-6 bg-codeconnect-green text-codeconnect-bg rounded-lg hover:bg-codeconnect-green-hover hover:shadow-md hover:shadow-codeconnect-green/20 cursor-pointer flex items-center justify-center gap-2',
    link: 'text-codeconnect-green hover:text-codeconnect-green-hover underline bg-transparent border-none p-0 cursor-pointer active:scale-100 focus:ring-0 focus:ring-offset-0'
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
