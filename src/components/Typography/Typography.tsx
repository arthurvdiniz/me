import React from 'react'

import { Paragraph, Title, Subtitle, Span } from './styles'

export enum TypographyVariant {
  Paragraph = 'paragraph',
  Title = 'title',
  Subtitle = 'subtitle',
  Span = 'span'
}

export interface TypographyProps
  extends React.ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'> {
  variant?: TypographyVariant
}

const Typography = React.forwardRef(function Typography(
  props: TypographyProps,
  ref: React.Ref<HTMLParagraphElement | HTMLHeadingElement>
) {
  const { variant } = props

  switch (variant) {
    case TypographyVariant.Title:
      return <Title ref={ref} {...props} />
    case TypographyVariant.Subtitle:
      return <Subtitle ref={ref} {...props} />
    case TypographyVariant.Span:
      return <Span ref={ref} {...props} />
    default:
      return <Paragraph ref={ref} {...props} />
  }
})

export default React.memo(Typography)
