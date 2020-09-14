import styled from 'styled-components'

export const LinkStyled = styled.a`
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0 5px;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 95%;
    left: 0;
    right: 0;
    bottom: 0;
    transition: top ${({ theme }) => theme.transitions.cubic}, background ${({ theme }) => theme.transitions.default};
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