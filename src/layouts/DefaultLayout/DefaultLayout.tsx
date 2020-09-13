import React from 'react'

import AppBar from '@/patterns/AppBar'

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
    </Main>
  )
}

export default React.memo(DefaultLayout)
