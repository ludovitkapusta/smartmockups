import { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import store, { wrapper } from '../src/store/store'
import GlobalStyle from '../src/theme/global-style'
import { theme } from '../src/theme/styled-components'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </ThemeProvider>
)

export default wrapper.withRedux(MyApp)
