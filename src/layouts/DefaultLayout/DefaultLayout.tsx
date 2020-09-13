import React from 'react'

import { Main } from '@/styled/Layout'

export interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout(props: DefaultLayoutProps): React.ReactElement {
  const { children } = props

  return <Main>{children}</Main>
}

export default React.memo(DefaultLayout)
