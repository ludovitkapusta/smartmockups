import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchAllData } from '@store/general/actions'
import { AppState } from '@store/rootReducer'
import { GeneralState } from '@store/general/types'

import Categories from '@components/Categories'
import Mockups from '@components/Mockups'
import styled, { theme } from '@theme/styled-components'

const StyledApp = styled.div`
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: ${theme.breakpoints.lg}px) {
    padding: 0;
    width: ${theme.breakpoints.lg}px;
  }
`

const App = (): JSX.Element => {
  const { loading } = useSelector(
    (state: AppState) => state.general
  ) as GeneralState

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllData())
  }, [])

  return (
    <StyledApp>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <Categories />
          <Mockups />
        </>
      )}
    </StyledApp>
  )
}

export default App
