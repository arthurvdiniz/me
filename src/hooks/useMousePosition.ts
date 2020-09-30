import React from 'react'

interface UseMousePosition {
  x: number
  y: number
  bind: { onMouseMove: (e: React.MouseEvent) => void }
}

function useMousePosition(): UseMousePosition {
  const [x, setX] = React.useState(0)
  const [y, setY] = React.useState(0)

  const bind = React.useMemo(
    () => ({
      onMouseMove: (e: React.MouseEvent) => {
        setX(e.nativeEvent.offsetX)
        setY(e.nativeEvent.offsetY)
      },
      onMouseLeave: (e: React.MouseEvent) => {
        setX(0)
        setY(0)
      }
    }),
    []
  )

  return { x, y, bind }
}

export default useMousePosition
