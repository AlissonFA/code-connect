import React from 'react'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, id, className = '', ...props }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <input
        type="checkbox"
        id={id}
        className={`w-5 h-5 bg-codeconnect-input border border-slate-700 rounded text-codeconnect-green accent-codeconnect-green cursor-pointer focus:ring-1 focus:ring-codeconnect-green focus:ring-offset-codeconnect-bg ${className}`}
        {...props}
      />
      <label htmlFor={id} className="text-sm font-medium text-slate-300 cursor-pointer select-none">
        {label}
      </label>
    </div>
  )
}
