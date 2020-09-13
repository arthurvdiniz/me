export enum Colors {
  white = '#FFFFFF',
  black = '#000000'
}

export enum FontSize {
  text = '16px',
  textSmall = '14px',
  title = '48px',
  titleSmall = '32px'
}

export enum Shadows {
  default = 'rgba(0, 0, 0, 0.15) 0px 1px 2px'
}

export enum Transitions {
  default = '300ms ease-in-out',
  cubic = '300ms cubic-bezier(0, 0.8, 0.13, 1)',
  easeInOutQuad = '300ms cubic-bezier(0.455, 0.03, 0.515, 0.955)'
}

export enum Breakpoints {
  phoneSmall = 320,
  phone = 376,
  phablet = 540,
  tablet = 735,
  desktop = 1070,
  desktopMedium = 1280,
  desktopLarge = 1440
}

const theme = {
  shadows: Shadows,
  transitions: Transitions,
  breakpoints: Breakpoints,
  typography: {
    fontSize: FontSize
  }
}

type CommomTheme = typeof theme

export interface Theme extends CommomTheme {
  colors: {
    primary: string
    background: string
    highlighted: string
  }
}

export const lightTheme = {
  ...theme,
  colors: {
    primary: Colors.black,
    background: Colors.white,
    highlighted: Colors.black
  }
}

export const darkTheme = {
  ...theme,
  colors: {
    primary: Colors.white,
    background: Colors.black,
    highlighted: Colors.white
  }
}

export type WithTheme = {
  theme: Theme
}

export default theme
