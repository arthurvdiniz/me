import React from 'react'

import { Animated } from './styles'

interface PerspectiveProps {
  children: React.ReactNode
}

function Perspective(props: PerspectiveProps): React.ReactElement {
  const { children } = props

  return (
    <Animated drag dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }} whileHover={{ scale: 1.1 }}>
      {children}
    </Animated>
  )
}

export default React.memo(Perspective)
