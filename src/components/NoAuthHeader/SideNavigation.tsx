'use client'

import Link from 'next/link'
import { Library, X } from 'lucide-react'

const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME

export const SideNavigation: React.FC<{
  open?: boolean
  closeFunction: () => void
}> = ({ open = false, closeFunction }) => {
  return (
    <div
      className={`
      max-[445px]:flex hidden flex-col fixed z-50 top-0 bottom-0 left-0 bg-primary-400 dark:bg-slate-800 
      w-[18.75rem] max-[305px]:w-[90%] transition-all ${!open ? '-translate-x-full' : 'translate-x-0'} py-8 px-4 shadow-md`}
      onClick={closeFunction}
    >
      <header className={'flex w-full items-center justify-between  h-14'}>
        <div />
        <h2 className="text-white font-extrabold text-2xl">{COMPANY_NAME}</h2>
        <X className="text-white cursor-pointer" size={35} />
      </header>
      <div className={'flex flex-1 flex-col mt-16 gap-2'}>
        <Link
          href={'/'}
          className="text-white bg-primary-200 font-semibold rounded-sm  text-lg px-4 py-2 flex gap-2 hover:text-zinc-600"
        >
          <Library /> Home
        </Link>
        <Link
          href={'signin'}
          className="text-white bg-primary-200 font-semibold  rounded-sm text-lg px-4 py-2 flex gap-2 hover:text-zinc-600"
        >
          <Library /> SignIn
        </Link>
        <Link
          href={'register'}
          className="text-white bg-primary-200 font-semibold  rounded-sm text-lg px-4 py-2 flex gap-2 hover:text-zinc-600 leading-none "
        >
          <Library /> Register
        </Link>
      </div>
      <span className="text-center whitespace-pre-wrap text-sm text-white font-bold ">
        © 2023 - ALL GAMES SERVIÇOS DE RESERVAS, INTERMEDIAÇÃO E AGENCIAMENTO
        LTDA.
      </span>
    </div>
  )
}
