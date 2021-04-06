import React from 'react'
import { useSelector } from 'react-redux'

import styled from 'styled-components'

import { CategoriesState } from '../store/categories/types'
import { MockupsState } from '../store/mockups/types'
import { AppState } from '../store/rootReducer'
import { theme } from '../theme/styled-components'
import { getMockupsBySelectedCategory } from '../utils/mockups'

const StyledMockups = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  margin-bottom: 50px;

  @media (min-width: ${theme.breakpoints.s}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.md}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const StyledHover = styled.div`
  background: linear-gradient(
    180deg,
    rgba(74, 74, 74, 0) 0%,
    rgba(0, 0, 0, 0.69) 100%
  );
  border: 1px solid ${theme.color.blue};
  border-radius: 4px;
  color: ${theme.color.white};
  display: none;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 10px 13px;
  position: absolute;
  width: 100%;
`

const StyledMockup = styled.div`
  position: relative;

  img {
    border-radius: 4px;
    width: 100%;
  }

  :hover {
    ${StyledHover} {
      cursor: pointer;
      display: flex;
    }
  }
`

const Mockups = (): JSX.Element => {
  const { categories, mockups } = useSelector((state: AppState) => state)
  const { selectedCategory } = categories as CategoriesState
  const { data } = mockups as MockupsState

  const selectedMockups = getMockupsBySelectedCategory(selectedCategory, data)

  return (
    <StyledMockups>
      {!!selectedMockups.length &&
        selectedMockups.map(({ id, thumb, title }) => (
          <StyledMockup key={id}>
            <StyledHover>{title}</StyledHover>
            <img alt={title} src={thumb} />
          </StyledMockup>
        ))}
    </StyledMockups>
  )
}

export default Mockups
