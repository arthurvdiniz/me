export enum Colors {
  white = '#FFFFFF',
  black = '#000000',
  transparent = 'rgba(255, 255, 255, 0)'
}

export enum FontSize {
  textLarge = '22px',
  text = '16px',
  textMedium = '14px',
  textSmall = '12px',
  title = '48px',
  titleMedium = '40px',
  titleSmall = '32px',
  titleSmallest = '28px',
}

export enum Shadows {
  default = 'rgba(0, 0, 0, 0.15) 0px 1px 2px'
}

export enum Transitions {
  default = '300ms ease-in-out',
  cubic = '300ms cubic-bezier(0, 0.8, 0.13, 1)',
  easeInOutQuad = '300ms cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  easeInOutQuadLong = '1.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)'
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
    transparent: string
  }
}

export const lightTheme = {
  ...theme,
  colors: {
    primary: Colors.black,
    background: Colors.white,
    highlighted: Colors.black,
    transparent: Colors.transparent
  }
}

export const darkTheme = {
  ...theme,
  colors: {
    primary: Colors.white,
    background: Colors.black,
    highlighted: Colors.white,
    transparent: Colors.transparent
  }
}

export type WithTheme = {
  theme: Theme
}

export default theme
