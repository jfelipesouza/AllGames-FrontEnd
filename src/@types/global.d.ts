// Declaração de variaveis globais para ter autocomplete

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string
      NEXT_PUBLIC_COMPANY_NAME: string
    }
  }
}
