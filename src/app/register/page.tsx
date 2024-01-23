import { NoAuthHeader, GenericFooter } from '@/components'

const SignInPage = () => {
  return (
    <div
      className={
        'flex flex-col min-h-screen bg-background dark:bg-slate-900 h-auto'
      }
    >
      <NoAuthHeader />
      <div></div>
      <GenericFooter />
    </div>
  )
}

export default SignInPage
