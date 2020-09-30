import React from 'react'

import { useSpring } from 'react-spring'

import getXYS from './utils/getXYS'
import getTransform from './utils/getTransform'
import { Animated } from './styles'

interface PerspectiveProps {
  children: React.ReactNode
}

function Perspective(props: PerspectiveProps): React.ReactElement {
  const { children } = props

  const [sprops, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  return (
    <Animated
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: getXYS(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      // @ts-ignore
      style={{ transform: sprops.xys.interpolate(getTransform) }}
    >
      {children}
    </Animated>
  )
}

export default React.memo(Perspective)
