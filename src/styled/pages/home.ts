import styled from 'styled-components'

export const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > .title {
    margin-bottom: 50px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
      margin-bottom: 20px;
    }
  }

  > .subtitle {
    margin-bottom: 20px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
      margin-bottom: 10px;
    }
  }
`
