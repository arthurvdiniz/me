import styled from 'styled-components'

interface SVGProps {
  color: string
}

export const SVG = styled.svg<SVGProps>`
  fill: ${({ color }) => color};
  transition: fill ${({ theme }) => theme.transitions.default};
`
