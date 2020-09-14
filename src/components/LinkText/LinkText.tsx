import React from 'react'
import Link from 'next/link'

import { LinkStyled } from './styles'

export enum LinkTextVariant {
  Internal = 'internal',
  External = 'external'
}

export interface LinkTextProps extends React.ComponentPropsWithoutRef<'a'> {
  variant?: LinkTextVariant
}

const LinkText = React.forwardRef(function LinkText(props: LinkTextProps, ref: React.Ref<HTMLAnchorElement>) {
  const { variant } = props

  switch (variant) {
    case LinkTextVariant.External:
      return <LinkStyled ref={ref} {...props} />
    default:
      return (
        <Link href={props.href}>
          <LinkStyled ref={ref} {...props} />
        </Link>
      )
  }
})

export default React.memo(LinkText)
