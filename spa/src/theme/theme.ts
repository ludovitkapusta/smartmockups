import { DefaultTheme } from 'styled-components'
import base from './variables/base'
import breakpoints from './variables/breakpoints'
import color from './variables/colors'

const myTheme: DefaultTheme = {
  base,
  breakpoints,
  color
}

// eslint-disable-next-line import/prefer-default-export
export { myTheme }
