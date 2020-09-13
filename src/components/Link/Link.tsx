import React from 'react'

import { External } from './styles'

export enum LinkVariant {
  Internal = 'internal',
  External = 'external'
}

export interface LinkProps extends React.ComponentPropsWithoutRef<'a'> {
  variant?: LinkVariant
}

const Link = React.forwardRef(function Link(props: LinkProps, ref: React.Ref<HTMLAnchorElement>) {
  const { variant } = props

  switch (variant) {
    case LinkVariant.External:
      return <External ref={ref} {...props} />
    default:
      return <></>
  }
})

export default React.memo(Link)
