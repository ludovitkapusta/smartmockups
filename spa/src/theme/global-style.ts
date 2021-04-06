import { fontFace, rem } from 'polished'
import { reboot } from 'styled-reboot'
import { createGlobalStyle, theme } from './styled-components'

import './fonts/Montserrat-Medium.ttf'
import './fonts/Montserrat-Bold.ttf'

const GlobalStyle = createGlobalStyle`
  ${reboot}
  ${fontFace({
    fontFamily: 'Montserrat',
    fontFilePath: '/assets/dist/fonts/Montserrat-Medium',
    fontWeight: '500',
    fileFormats: ['ttf']
  })}

  ${fontFace({
    fontFamily: 'Montserrat',
    fontFilePath: '/assets/dist/fonts/Montserrat-Bold',
    fontWeight: '700',
    fileFormats: ['ttf']
  })}

  body {
    font-size: ${theme.base.fontSize};
    font-family: ${theme.base.fontFamily};
    letter-spacing: ${theme.base.letterSpacing};
    line-height: ${theme.base.lineHeight};
    margin: 0 auto;
    padding: 0;
    width: 100%;
  }

  h1, h2 {
    font-weight: 500;
  }

  h1 {
    color: ${theme.color.black};
    margin: 0 auto 38px;
  }

  h2 {
    color: ${theme.color.blue};
    font-weight: 500;
    font-size: ${rem(17)};
    margin: 33px auto 10px;
  }
`

export default GlobalStyle
