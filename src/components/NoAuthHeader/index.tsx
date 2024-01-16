'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { MedalIcon, MenuIcon } from 'lucide-react'
import { SideNavigation } from './SideNavigation'

const linkStyle = `relative after:absolute after:bottom-[-0.2rem] 
after:left-0 after:content-[""] after:w-[0%] after:h-[0.12rem]
after:rounded-md after:bg-white hover:after:w-[100%] after:transition-all 
after:ease-linear after:duration-[0.4s] text-xl text-slate-50 font-semibold
transition-transform scale-95 hover:scale-100`

export const NoAuthHeader: React.FC = () => {
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME
  const [open, setOpen] = useState(false)

  const handleChangeStatusSideNavigation = () => {
    setOpen((prev: boolean) => !prev)
  }
  return (
    <header
      className={
        'flex w-full min-h-24 bg-primary-400 dark:bg-slate-800 px-8 justify-between mb-4'
      }
    >
      <div
        className="max-[445px]:flex hidden items-center justify-center text-white"
        onClick={handleChangeStatusSideNavigation}
      >
        <MenuIcon size={30} />
      </div>

      <Link href={'/'} className="flex items-center justify-center gap-2  ">
        <MedalIcon color="white" className="max-[345px]:hidden" />
        <h2 className="text-white text-4xl max-[345px]:text-3xl">
          {companyName}
        </h2>
      </Link>
      <div className="flex flex-row items-center justify-center gap-4 max-[445px]:hidden">
        <Link href={'/signin'} className={linkStyle}>
          SignIn
        </Link>
        <Link href={'/register'} className={linkStyle}>
          Register
        </Link>
      </div>
      <div className="max-[445px]:flex hidden" />
      <SideNavigation
        open={open}
        closeFunction={handleChangeStatusSideNavigation}
      />
    </header>
  )
}
