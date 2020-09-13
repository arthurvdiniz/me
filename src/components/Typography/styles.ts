import styled from 'styled-components'

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.text};
  letter-spacing: 0.16px;
  line-height: 24px;
`

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.text};
  letter-spacing: 0.16px;
  line-height: 24px;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.title};
  letter-spacing: 0px;
  line-height: 48px;
  font-weight: 600;
`

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.titleSmall};
  letter-spacing: 0px;
  line-height: 40px;
`
