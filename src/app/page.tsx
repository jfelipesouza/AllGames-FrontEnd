import React from 'react'
import { NoAuthHeader } from '@/components'

const Home: React.FC = () => {
  const events = [{}, {}, {}, {}, {}, {}, {}, {}]
  return (
    <div
      className={
        'flex flex-col min-h-screen bg-background dark:bg-slate-900 m011424+in-h-screen h-auto'
      }
    >
      <NoAuthHeader />
      <div className={'flex flex-1 min-h-full flex-col'}>
        <div className={'flex flex-col items-center justify-center my-10'}>
          <h2 className="scroll-m-20 pb-2 font-black text-4xl max-[400px]:text-2xl tracking-tight first:mt-0 text-center">
            Encontre o seu próximo evento
            <br /> e se divirta
          </h2>

          <div>
            <input />
            <div></div>
          </div>
        </div>

        <div className="mt-8 flex">
          {events.map((props, index) => (
            <div className="mx-4" key={index}>
              {index}
            </div>
          ))}
        </div>
      </div>
      <footer
        className={'flex  bg-primary-400 dark:bg-slate-800 h-[20rem]'}
      ></footer>
    </div>
  )
}

export default Home
