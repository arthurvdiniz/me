import React from 'react'
import { AppProps } from 'next/app'

import DefaultThemeProvider from '@/theme/DefaultThemeProvider'

function App(props: AppProps): React.ReactElement {
  const { Component, pageProps } = props
  return (
    <DefaultThemeProvider>
      <Component {...pageProps} />
    </DefaultThemeProvider>
  )
}

export default App
