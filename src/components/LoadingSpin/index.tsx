import React from 'react'

// import { Container } from './styles';

export const LoadingSpin: React.FC = () => {
  return (
    <div className="flex gap-2 items-center ">
      <div className="w-6 h-6 relative border-[3px] rounded-3xl border-slate-300 border-t-primary-500 animate-spin" />
      <span className="font-bold font-sans ">Loading...</span>
    </div>
  )
}
