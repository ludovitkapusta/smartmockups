/* eslint-disable @typescript-eslint/no-explicit-any */
import 'core-js'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { theme, ThemeProvider } from '@theme/styled-components'

import store from '@store/store'
import GlobalStyle from '@theme/global-style'
import App from '../src/App'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('app')
)
