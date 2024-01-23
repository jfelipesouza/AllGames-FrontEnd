'use client'
import React, { useEffect, useState } from 'react'
import {
  GenericFooter,
  NoAuthHeader,
  EventCard,
  LoadingSpin,
} from '@/components'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const FailScreen: React.FC = () => {
  return (
    <div className={'flex flex-col w-full items-center justify-center mt-8'}>
      <div className={'relative w-1/2 max-[720px]:w-full h-[300px] '}>
        <Image
          src={'/img/sad_face.png'}
          alt={'Cara triste'}
          className={'object-contain'}
          fill
        />
      </div>
      <p
        className={
          ' text-xl font-bold max-[720px]:text-center max-[400px]:text-lg text-slate-900 mt-8'
        }
      >
        Não foi possivel encontrar novos eventos no momento. Tente mais tarde!
      </p>
    </div>
  )
}

const HomePage: React.FC = () => {
  const [events, setEvents] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [fail, setFail] = useState(false)

  const handleSearchEvent = (event: any) => {
    console.log({ event, inputValue: event.target[0].value })
    event.preventDefault()
  }
  const findNewEvents = async () => {
    try {
      setLoading(true)
      console.log('olá')
      // Busca novos elementos para montar tela
      const newEvents = /* [...events, {}, {}, {}, {}, {}, {}, {}, {}] */ [
        ...events,
      ]
      // Set novos elementos
      if (newEvents.length > 0) {
        setLoading(false)
      } else {
        setLoading(false)
      }
      setEvents(newEvents)
      // Enterroper o Loading
    } catch (error) {
      setLoading(false)
      setFail(true)
    }
  }

  useEffect(() => {
    findNewEvents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={
        'flex flex-col min-h-screen bg-background dark:bg-slate-900 h-auto'
      }
    >
      <NoAuthHeader />
      <div className={'flex flex-1 min-h-[70vh] flex-col px-8'}>
        <div
          className={'flex flex-col items-center justify-center mt-10 gap-8'}
        >
          <h2 className="scroll-m-20 pb-2 font-black text-4xl max-[400px]:text-2xl tracking-tight first:mt-0 text-center">
            Encontre o seu próximo evento
            <br /> e se divirta
          </h2>

          <form
            onSubmit={handleSearchEvent}
            className="flex w-full max-w-[700px] min-w-[300px] max-[350px]:min-h-auto items-center space-x-2 "
          >
            <Input
              type="text"
              placeholder="Busque seu novo evento..."
              className={'bg-gray-100 py-5'}
            />
            <Button type="submit">Pesquisar</Button>
          </form>
        </div>

        <div
          className={
            'grid grid-cols-4 max-[720px]:grid-cols-1 w-full max-[1085px]:grid-cols-2 max-[1400px]:grid-cols-3 mt-8 pt-8 gap-8 justify-items-center'
          }
        >
          {events.length > 0 &&
            events.map((props, index) => <EventCard key={index} />)}
        </div>
        {events.length === 0 && <FailScreen />}
      </div>
      {loading && (
        <div className="flex w-full items-center justify-center">
          <LoadingSpin />
        </div>
      )}
      <GenericFooter />
    </div>
  )
}

export default HomePage
