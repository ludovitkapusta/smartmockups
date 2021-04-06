import React from 'react'

import styled, { theme } from '../src/theme/styled-components'

import Categories from '../src/components/Categories'
import Mockups from '../src/components/Mockups'

import { fetchAllData } from '../src/store/general/actions'
import { AppThunkDispatch } from '../src/store/general/types'
import { wrapper } from '../src/store/store'

const StyledApp = styled.div`
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: ${theme.breakpoints.lg}px) {
    padding: 0;
    width: ${theme.breakpoints.lg}px;
  }
`

const Home = (): JSX.Element => (
  <StyledApp>
    <Categories />
    <Mockups />
  </StyledApp>
)

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch = store.dispatch as AppThunkDispatch
    return dispatch(fetchAllData())
  }
)

export default Home
