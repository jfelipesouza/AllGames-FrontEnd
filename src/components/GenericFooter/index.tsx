import React from 'react'
import './footer.css'

import { FacebookIcon, InstagramIcon, MessageCircleIcon } from 'lucide-react'

const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME // Nome da aplicação

export const GenericFooter: React.FC = () => {
  return (
    <footer
      className={
        'flex w-screen bg-primary-400 px-16 h-[20rem] mt-24 max-[600px]:flex-col max-[600px]:py-16 max-[600px]:min-h-[20rem] max-[600px]:h-auto max-[600px]:gap-8 max-[600px]:px-8 '
      }
    >
      <div className="flex flex-col w-1/2 max-[600px]:w-full justify-center gap-4 max-[400px]:gap-2 max-[600px]:items-center">
        <h1
          className={
            'font-extrabold text-white text-7xl max-[600px]:text-6xl max-[400px]:text-5xl max-[380px]:text-center '
          }
        >
          {COMPANY_NAME}
        </h1>
        <p className={' text-white text-xl max-[400px]:text-lg'}>
          Reserve, pratique e viva!
        </p>
      </div>
      <div className="flex flex-col w-1/2 max-[600px]:w-full justify-center items-end max-[600px]:items-center">
        <div className="flex-col flex gap-4 ">
          <h2 className="text-white font-bold text-xl text-center">
            Conecte-se
          </h2>
          <div className="flex flex-row gap-4">
            <a
              href="#"
              target="_blank"
              className={`iconButton bg-white p-2 rounded-lg flex items-center justify-center transition-all ease-linear
               hover:bg-secondary-300 hover:rounded-full focus-visible:outline-none ring-offset-background
               focus-visible:bg-secondary-200 focus-visible:rounded-full
                focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-0 
              `}
            >
              <FacebookIcon id="icon" />
            </a>
            <a
              href="#"
              target="_blank"
              className={`iconButton bg-white p-2 rounded-lg flex items-center justify-center
               hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all ease-linear
               hover:rounded-full focus-visible:outline-none ring-offset-background 
               focus-visible:bg-purple-500 focus-visible:to-pink-500 focus-visible:rounded-full
               focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-0
               `}
            >
              <InstagramIcon id="icon" />
            </a>
            <a
              href="#"
              target="_blank"
              className={`iconButton bg-white  p-2 rounded-lg flex items-center justify-center
               hover:bg-emerald-600 hover:rounded-full transition-color ease-linear
               focus-visible:outline-none ring-offset-background 
               focus-visible:bg-emerald-600 focus-visible:rounded-full
               focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-0
               `}
            >
              <MessageCircleIcon id="icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
