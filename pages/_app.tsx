import React from 'react'
import type { AppProps } from 'next/app'
import '../app/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}

export default App
