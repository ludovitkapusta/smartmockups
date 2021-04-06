import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { Provider } from 'react-redux'
import { act } from 'react-dom/test-utils'

import { theme, ThemeProvider } from '../src/theme/styled-components'
import Categories from '../src/components/Categories'
import store from '../src/store/store'

/** @type {HTMLDivElement | Element} */
let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
})

describe('Categories component', () => {
  test('Will render Categories', () => {
    act(() => {
      render(
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Categories />
          </Provider>
        </ThemeProvider>,
        container
      )
    })
    expect(container.textContent).toBeTruthy()
  })
})
