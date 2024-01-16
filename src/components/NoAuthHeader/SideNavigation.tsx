'use client'

import Link from 'next/link'
import { Library } from 'lucide-react'

export const SideNavigation = ({
  open = false,
  closeFunction,
}: {
  open?: boolean
  closeFunction: () => void
}) => {
  return (
    <div
      className={`
      max-[445px]:flex hidden flex-col absolute z-50 top-0 bottom-0 left-0 bg-primary-400 dark:bg-slate-800 
      w-[300px] transition-all ${!open ? '-translate-x-full' : 'translate-x-0'} py-8 px-8`}
      onClick={closeFunction}
    >
      <header className={'flex w-full items-center justify-center h-14'}>
        <h2 className="text-white font-extrabold text-2xl">All Games</h2>
      </header>
      <div className={'flex flex-col mt-16'}>
        <Link
          href={'register'}
          className="text-white text-lg px-4 py-2 flex gap-2 hover:text-zinc-600"
        >
          <Library /> Register
        </Link>
      </div>
    </div>
  )
}
