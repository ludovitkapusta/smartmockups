import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { rem } from 'polished'

import styled, { css, theme } from '@theme/styled-components'

import { AppState } from '@store/rootReducer'
import { CategoriesState } from '@store/categories/types'
import { MockupsState } from '@store/mockups/types'
import { setSelectedCategory } from '@store/categories/actions'
import { compareTwoArrays } from '@utils/common'
import { getFilteredCategories } from '@utils/categories'

const StyledCategories = styled.div`
  background: ${theme.color.grayLigth};
  border: 1px solid ${theme.color.gray};
  border-radius: 4px;
  margin: 55px 0 29px;
  padding: 25px 0;
`

const StyledLink = styled.a<{ isActive?: boolean }>`
  color: ${theme.color.black};
  display: block;
  padding: 0 45px;
  text-decoration: none;

  ${(props) =>
    props.isActive &&
    css`
      font-weight: 700;
    `}
`

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    line-height: ${rem(40)};

    :hover {
      cursor: pointer;

      ${StyledLink} {
        color: ${theme.color.gray};
      }
    }

    @media (min-width: ${theme.breakpoints.s}px) {
      border-right: 1px solid ${theme.color.gray};
    }

    @media (min-width: ${theme.breakpoints.s}px) and (max-width: ${theme
        .breakpoints.md - 1}px) {
      :nth-child(2n) {
        border: none;
      }
    }

    @media (min-width: ${theme.breakpoints.md}px) and (max-width: ${theme
        .breakpoints.lg - 1}px) {
      :nth-child(3n) {
        border: none;
      }
    }

    @media (min-width: ${theme.breakpoints.lg}px) {
      :nth-child(4n) {
        border: none;
      }
    }
  }

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

const Categories = (): JSX.Element => {
  const categories = useSelector(
    (state: AppState) => state.categories
  ) as CategoriesState

  const mockups = useSelector(
    (state: AppState) => state.mockups
  ) as MockupsState

  const dispatch = useDispatch()

  const filteredCategories = getFilteredCategories(categories, mockups)
  const isCategoryActive = (arr1: string[], arr2: string[]): boolean =>
    compareTwoArrays(arr1, arr2)

  const handleCategoryClick = (slug: string[]) => (): void => {
    dispatch(setSelectedCategory(slug))
  }

  return (
    <StyledCategories>
      <StyledUl>
        <li>
          <StyledLink
            isActive={isCategoryActive(categories.selectedCategory, [
              'show-all'
            ])}
            onClick={handleCategoryClick(['show-all'])}
          >
            Show all
          </StyledLink>
        </li>
        {!!filteredCategories.length &&
          filteredCategories.map((item) => (
            <li key={item.title}>
              <StyledLink
                isActive={isCategoryActive(
                  item.slugs,
                  categories.selectedCategory
                )}
                onClick={handleCategoryClick(item.slugs)}
              >
                {item.title}
              </StyledLink>
            </li>
          ))}
      </StyledUl>
    </StyledCategories>
  )
}

export default Categories
