import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  > a {
    display: flex;
    align-items: center;
    margin: 0 10px;
    transition: opacity ${({ theme }) => theme.transitions.default};

    &:hover {
      opacity: 0.8;
    }

    > svg {
      color: ${({ theme }) => theme.colors.primary};
      transition: color ${({ theme }) => theme.transitions.default};
    }
  }
`
