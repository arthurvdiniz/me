import React from 'react'

import AppBar from '@/patterns/AppBar'
import Footer from '@/patterns/Footer'

import { Main } from '@/styled/Layout'

export interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout(props: DefaultLayoutProps): React.ReactElement {
  const { children } = props

  return (
    <Main>
      <AppBar />
      {children}
      <Footer />
    </Main>
  )
}

export default React.memo(DefaultLayout)
