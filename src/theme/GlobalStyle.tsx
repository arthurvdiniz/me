import { createGlobalStyle } from 'styled-components'

import { Theme } from './CommonTheme'

interface GlobalStyleProps {
  theme: Theme
}

export default createGlobalStyle<GlobalStyleProps>`
  * {
    margin: 0px;
    padding: 0px;
    font-family: 'Inconsolata', serif;
    text-rendering: optimizelegibility;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    appearance: none;
    text-size-adjust: 100%;
    font-weight: inherit;
    text-rendering: optimizelegibility;
    border-color: initial;
    border-image: initial;
    border-style: initial;
    border-width: 0px;
    outline: 0px;
    transition: color ${({ theme }) => theme.transitions.default};
  }

  body {
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.background};
    transition: background-color ${({ theme }) => theme.transitions.default};
  }

  h1, h2, p, span {
    color: ${({ theme }) => theme.colors.primary};
  }

  button {
    background: none;
  }

  img {
    max-width: none;
  }
`
