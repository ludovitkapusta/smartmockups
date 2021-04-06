import { rem } from 'polished'
import color from './colors'

export interface Base {
  fontSize: string
  fontColor: string
  fontFamily: string
  fontWeight: number
  letterSpacing: string
  lineHeight: string
}

const base: Base = {
  fontColor: color.black,
  fontSize: rem(15),
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 500,
  letterSpacing: '-0.4px',
  lineHeight: rem(18)
}

export default base
