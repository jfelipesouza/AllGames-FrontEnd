import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const linkStyle = `relative after:absolute after:bottom-[-0.2rem] 
after:left-0 after:content-[""] after:w-[0%] after:h-[0.12rem]
after:rounded-md after:bg-white hover:after:w-[100%] after:transition-all 
after:ease-linear after:duration-[0.4s] text-xl text-slate-50 font-semibold
transition-transform scale-95 hover:scale-100`
