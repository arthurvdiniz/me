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
  cubic = '300ms cubic-bezier(0, 0.8, 0.13, 1)'
}

export enum Devices {
  mobile = '897px',
  laptop = '1224px',
  desktop = '1920px'
}

const theme = {
  shadows: Shadows,
  transitions: Transitions,
  devices: Devices,
  typography: {
    fontSize: FontSize
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

export type Theme = typeof lightTheme | typeof darkTheme

export type WithTheme = {
  theme: Theme
}

export default theme
