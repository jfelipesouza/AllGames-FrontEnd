import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './_components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
