import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export const Input: React.FC<InputProps> = ({ label, id, className = '', ...props }) => {
  return (
    <div className="w-full flex flex-col items-start mb-4">
      <label htmlFor={id} className="text-sm font-medium text-white mb-2">
        {label}
      </label>
      <input
        id={id}
        className={`w-full px-4 py-3 bg-codeconnect-input text-white border border-slate-700 rounded-lg placeholder-slate-400 focus:outline-none focus:border-codeconnect-green focus:ring-1 focus:ring-codeconnect-green transition-colors ${className}`}
        {...props}
      />
    </div>
  )
}
