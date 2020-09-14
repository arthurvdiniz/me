import styled from 'styled-components'

interface TextHighlightedProps {
  isHighlighted: boolean
}

export const TextHighlighted = styled.span<TextHighlightedProps>`
  position: relative;
  color: ${({ theme }) => theme.colors.background};
  padding: 0 10px;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: ${({ isHighlighted }) => (isHighlighted ? '100%' : '0')};
    height: 100%;
    background-color: ${({ theme }) => theme.colors.highlighted};
    transition: width ${({ theme }) => theme.transitions.easeInOutQuadLong},
      background-color ${({ theme }) => theme.transitions.default};
  }
`
