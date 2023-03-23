import React from 'react'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import type { AppProps } from 'next/app'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider } from '@tanstack/react-query'

import { client } from 'lib/react-query'

import Header from '@/components/Header'
import AuthProvider from '@/hooks/Auth/AuthProvider'

import '@/styles/global.css'
import 'react-toastify/dist/ReactToastify.css'

export default function CustomApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => client)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-primaryColor1">
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={true} />
          <AuthProvider>
            <Header />
            <Component {...pageProps} />
            <ToastContainer />
          </AuthProvider>
        </QueryClientProvider>
      </div>
    </>
  )
}
