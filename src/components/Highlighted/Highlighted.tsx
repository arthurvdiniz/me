import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'

import { TextHighlighted } from './styles'

export interface HighlightedProps {
  children: React.ReactNode
}

function Highlighted(props: HighlightedProps): React.ReactElement {
  const { children } = props
  const [highlighted, setHighlighted] = React.useState(false)

  function wasViewed(isVisible) {
    if (isVisible) {
      setHighlighted(true)
    }
  }

  if (process.browser) {
    return (
      <VisibilitySensor onChange={wasViewed}>
        <TextHighlighted isHighlighted={highlighted}>{children}</TextHighlighted>
      </VisibilitySensor>
    )
  }

  return <>{children}</>
}

export default React.memo(Highlighted)
