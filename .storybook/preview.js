import DefaultThemeProvider from '../src/theme/DefaultThemeProvider'

export const decorators = [
  (Story) => (
    <DefaultThemeProvider>
      <Story />
    </DefaultThemeProvider>
  )
]