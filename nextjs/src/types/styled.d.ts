import 'styled-components'

import { Base } from '../theme/variables/base'
import { Breakpoints } from '../theme/variables/breakpoints'
import { Color } from '../theme/variables/colors'

declare module 'styled-components' {
  export interface DefaultTheme {
    base: Base
    breakpoints: Breakpoints
    color: Color
  }
}
