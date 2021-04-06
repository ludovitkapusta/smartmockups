import * as styledComponents from 'styled-components'
import { DefaultTheme } from 'styled-components'

import base from './variables/base'
import breakpoints from './variables/breakpoints'
import color from './variables/colors'

const {
  ThemeProvider,
  createGlobalStyle,
  css,
  default: styled,
  keyframes
} = styledComponents as styledComponents.ThemedStyledComponentsModule<DefaultTheme>

export const theme: DefaultTheme = {
  base,
  breakpoints,
  color
}

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled
