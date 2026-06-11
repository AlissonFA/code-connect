import React from 'react'

interface AuthBannerProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

export const AuthBanner: React.FC<AuthBannerProps> = ({ imageSrc, alt, className = '' }) => {
  return (
    <div className={`relative w-full h-full min-h-[300px] md:min-h-full overflow-hidden ${className}`}>
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-full object-cover select-none pointer-events-none"
      />
    </div>
  )
}
