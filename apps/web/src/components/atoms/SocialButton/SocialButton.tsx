import React from 'react'

interface SocialButtonProps {
  iconSrc: string;
  label: string;
  onClick?: () => void;
  className?: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  iconSrc,
  label,
  onClick,
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`flex flex-col items-center gap-1.5 cursor-pointer outline-none hover:opacity-80 active:scale-95 transition-all focus:ring-1 focus:ring-codeconnect-green rounded p-1 ${className}`}
    >
      <img src={iconSrc} alt="" aria-hidden="true" className="w-8 h-8 object-contain" />
      <span className="text-xs text-slate-400 font-medium">{label}</span>
    </button>
  )
}

