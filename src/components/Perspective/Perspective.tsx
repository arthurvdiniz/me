import React from 'react'

import useMousePosition from '@/hooks/useMousePosition'

import { Content } from './styles'

// TODO

interface PerspectiveProps {
  children: React.ReactNode
}

function Perspective(props: PerspectiveProps): React.ReactElement {
  const { children } = props

  const ref = React.useRef(null)
  const { x, y, bind } = useMousePosition()
  const [positionX, setPositionX] = React.useState('0')
  const [positionY, setPositionY] = React.useState('0')

  React.useEffect(() => {
    if (ref.current) {
      setPositionX(((y / ref.current.offsetHeight) * 50).toFixed(2))
      setPositionY(((x / ref.current.offsetWidth) * 50).toFixed(2))
    }
  }, [x, y, ref])

  return (
    <Content positionX={positionX} positionY={positionY} ref={ref} {...bind}>
      {children}
    </Content>
  )
}

export default Perspective
