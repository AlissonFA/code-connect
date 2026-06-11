import React from 'react'

interface AuthBannerProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

export const AuthBanner: React.FC<AuthBannerProps> = ({ imageSrc, alt, className = '' }) => {
  return (
    <div className={`relative w-full h-full min-h-[300px] md:min-h-full overflow-hidden ${className}`}>
      <picture>
        {/* On mobile screens (< 768px), load a tiny transparent 1x1 SVG to prevent downloading the heavy banner image */}
        <source media="(max-width: 767px)" srcSet="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" />
        {/* On desktop screens (>= 768px), prefer the optimized WebP format */}
        <source media="(min-width: 768px)" srcSet={imageSrc.replace('.png', '.webp')} type="image/webp" />
        <img
          src={imageSrc}
          alt={alt}
          width={407}
          height={636}
          className="w-full h-full object-cover select-none pointer-events-none"
        />
      </picture>
    </div>
  )
}
