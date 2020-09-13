import React from 'react'

export type Condition = boolean | (() => boolean)

function isTrue(condition: Condition): boolean {
  return typeof condition === 'function' ? condition() : condition
}

export interface WhenProps {
  condition: Condition
  failWith?: React.ReactNode
  children?: React.ReactNode
}

function When(props: WhenProps): React.ReactElement {
  const { condition, children, failWith } = props

  return <>{isTrue(condition) ? children : failWith}</>
}

export default React.memo(When)
