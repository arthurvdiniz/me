import React from 'react'

import Logo from '@/patterns/Logo'
import SwitchTheme from '@/patterns/SwitchTheme'

import { Container } from './styles'

function AppBar(): React.ReactElement {
  return (
    <Container>
      <Logo />
      <SwitchTheme />
    </Container>
  )
}

export default React.memo(AppBar)
