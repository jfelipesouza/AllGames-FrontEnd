import Image from 'next/image'

const NotFoundEvents: React.FC = () => {
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

export { NotFoundEvents }
