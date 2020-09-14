import React from 'react'
import Link from 'next/link'

import Logo from '@/patterns/Logo'
import SwitchTheme from '@/patterns/SwitchTheme'

import { Container } from './styles'

function AppBar(): React.ReactElement {
  return (
    <Container>
      <Link href="/">
        <a aria-label="Home page">
          <Logo />
        </a>
      </Link>
      <SwitchTheme />
    </Container>
  )
}

export default React.memo(AppBar)
