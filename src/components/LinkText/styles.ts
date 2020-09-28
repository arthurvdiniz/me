import styled from 'styled-components'

export const LinkStyled = styled.a`
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  padding: 2px 5px;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 100%;
    left: 0;
    right: 0;
    bottom: -3px;
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
