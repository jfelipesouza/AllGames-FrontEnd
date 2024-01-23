import type { Metadata } from 'next'
import { Poppins as FontSans } from 'next/font/google'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils'

import { ThemeProvider } from './_components/theme-provider'

import './globals.css'

const font = FontSans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
})

const fontHeading = localFont({
  src: '../assets/Poppins/Poppins-ExtraBold.ttf',
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'All Games App',
  description:
    'Participe dos melhores eventos esportivos com facilidade! Cadastre-se agora em nosso site e tenha acesso exclusivo a uma variedade de competições emocionantes. Descubra oportunidades únicas para mostrar suas habilidades e competir em cenários esportivos de alto nível. Registre-se hoje e faça parte da comunidade apaixonada por esportes. Seja parte do próximo grande evento - sua jornada esportiva começa aqui!',
  keywords: [
    'Eventos',
    'Corridas',
    'Esportes',
    'Agendamentos',
    'Aracaju',
    'All Games',
  ],
}

type RootLayoutParams = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutParams) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          font.variable,
          fontHeading.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
