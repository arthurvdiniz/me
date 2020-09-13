import styled from 'styled-components'
import Link from 'next/link'

export const Internal = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Lora';
  font-size: ${({ theme }) => theme.typography.fontSize.text};
  letter-spacing: 0.16px;
  line-height: 24px;
`

export const External = styled.a`
  position: relative;
  text-decoration: none;
  font-weight: 500;
  color: inherit;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 85%;
    left: -0.1em;
    right: -0.1em;
    bottom: 0;
    transition: top ${({ theme }) => theme.transitions.cubic};
    background-color: ${({ theme }) => theme.colors.highlighted};
  }

  &:hover,
  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.background};
    &::after {
      top: 0%;
    }
  }
`
