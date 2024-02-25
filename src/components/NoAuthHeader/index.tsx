'use client'

import { linkStyle } from '@/lib/utils'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { SideNavigation } from './SideNavigation'

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
        <h2 className="text-white text-4xl max-[345px]:text-3xl font-extrabold">
          {companyName}
        </h2>
      </Link>
      <div className="flex flex-row items-center justify-center gap-4 max-[445px]:hidden">
        <Link href={'/auth/signin'} className={linkStyle}>
          SignIn
        </Link>
        <Link href={'/aurh/register'} className={linkStyle}>
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
