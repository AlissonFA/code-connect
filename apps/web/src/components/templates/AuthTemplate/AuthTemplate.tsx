import React from 'react'

interface AuthTemplateProps {
  banner: React.ReactNode;
  form: React.ReactNode;
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({ banner, form }) => {
  return (
    <div className="relative min-h-screen w-full bg-codeconnect-bg flex items-center justify-center p-4 overflow-hidden">
      {/* Background Decoration: Top-Left Chain Link */}
      <svg
        className="absolute top-[-5%] left-[-5%] w-[40%] max-w-[400px] h-auto text-slate-800/15 pointer-events-none select-none"
        viewBox="0 0 200 300"
        fill="none"
        stroke="currentColor"
        strokeWidth="12"
      >
        <rect x="20" y="20" width="80" height="150" rx="40" />
        <rect x="60" y="100" width="80" height="150" rx="40" />
      </svg>

      {/* Background Decoration: Bottom-Right Chain Link */}
      <svg
        className="absolute bottom-[-5%] right-[-5%] w-[40%] max-w-[400px] h-auto text-slate-800/15 pointer-events-none select-none"
        viewBox="0 0 200 300"
        fill="none"
        stroke="currentColor"
        strokeWidth="12"
      >
        <rect x="20" y="20" width="80" height="150" rx="40" />
        <rect x="60" y="100" width="80" height="150" rx="40" />
      </svg>

      {/* Main Container Card */}
      <div className="relative z-10 w-full max-w-[860px] bg-codeconnect-card p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-8 md:gap-10 items-stretch">
        {/* Banner Section */}
        <div className="hidden md:block md:w-1/2 rounded-xl overflow-hidden">
          {banner}
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center py-4 px-2">
          {form}
        </div>
      </div>
    </div>
  )
}
