import React from 'react'
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'

import GlobalStyle from './GlobalStyle'
import { lightTheme, darkTheme } from './CommonTheme'

export interface DefaultThemeProviderProps {
  children: React.ReactNode
}

function DefaultThemeProvider(props: DefaultThemeProviderProps): React.ReactElement {
  const { children } = props

  const { value } = useDarkMode(false, { onChange: null })
  const theme = value ? darkTheme : lightTheme

  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const body = (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>
  }

  return body
}

export default React.memo(DefaultThemeProvider)
