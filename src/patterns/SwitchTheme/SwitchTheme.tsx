import React from 'react'
import useDarkTheme from 'use-dark-mode'

import { IconWrapper, MoonMask, MoonOrSun } from './styles'

function SwitchTheme(): React.ReactElement {
  const darkMode = useDarkTheme()

  return (
    <IconWrapper
      isDark={darkMode.value}
      onClick={darkMode.toggle}
      data-a11y="false"
      aria-label={darkMode.value ? 'Activate light mode' : 'Activate dark mode'}
      title={darkMode.value ? 'Activate light mode' : 'Activate dark mode'}
    >
      <MoonOrSun isDark={darkMode.value} />
      <MoonMask isDark={darkMode.value} />
    </IconWrapper>
  )
}

export default React.memo(SwitchTheme)
