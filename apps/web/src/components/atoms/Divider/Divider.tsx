import React from 'react'

interface DividerProps {
  text: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ text, className = '' }) => {
  return (
    <div className={`flex items-center w-full my-6 text-sm text-slate-400 ${className}`}>
      <div className="flex-grow border-t border-slate-700"></div>
      <span className="px-4 text-xs tracking-wide">{text}</span>
      <div className="flex-grow border-t border-slate-700"></div>
    </div>
  )
}
