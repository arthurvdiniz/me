/* eslint @typescript-eslint/no-empty-interface: "off" */
import 'styled-components'

import { Theme } from './CommonTheme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
