import styled from 'styled-components'

interface ComponentProps {
  as?: string
}

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.text};
  letter-spacing: 0.16px;
  line-height: 24px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.typography.fontSize.textMedium};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    font-size: ${({ theme }) => theme.typography.fontSize.textSmall};
  }
`

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.text};
  letter-spacing: 0.16px;
  line-height: 24px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.typography.fontSize.textMedium};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    font-size: ${({ theme }) => theme.typography.fontSize.textSmall};
  }
`

export const Title = styled.h1<ComponentProps>`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.title};
  letter-spacing: 0px;
  line-height: 48px;
  font-weight: 600;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.typography.fontSize.titleMedium};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    font-size: ${({ theme }) => theme.typography.fontSize.titleSmall};
  }
`

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.titleSmall};
  letter-spacing: 0px;
  line-height: 40px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.typography.fontSize.titleSmallest};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    font-size: ${({ theme }) => theme.typography.fontSize.textLarge};
    line-height: 30px;
  }
`
