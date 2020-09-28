import styled from 'styled-components'

interface TextHighlightedProps {
  isHighlighted: boolean
}

export const TextHighlighted = styled.span<TextHighlightedProps>`
  color: ${({ isHighlighted, theme }) => (isHighlighted ? theme.colors.background : theme.colors.primary)};
  padding: 2px 10px 5px 10px;

  background-image: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.transparent} 50%,
    ${({ theme }) => theme.colors.primary} 0
  );
  background-size: 200%;
  background-position: ${({ isHighlighted }) => (isHighlighted ? '-100%' : 0)};
  transition: background-position ${({ theme }) => theme.transitions.easeInOutQuadLong},
    color ${({ theme }) => theme.transitions.easeInOutQuadLong};
`
