import { Categories, Category } from '@store/categories/types'
import { Mockups } from '@store/mockups/types'
import { getMockupsCategories } from './mockups'

interface MenuItem {
  title: string
  slugs: string[]
}

export const getCategoryChildren = (arr: Category): Category[] =>
  arr.children.reduce((acc: Category[], curr) => {
    const child = !!curr.children.length && getCategoryChildren(curr)
    return child ? [...acc, curr, ...child] : [...acc, curr]
  }, [])

export const filterCategoriesByMockupCategories = (
  allCategories: Category[],
  mockupCategories: string[]
): Category[] =>
  allCategories.reduce((acc: Category[], curr) => {
    const categoryInMockups = mockupCategories.find(
      (item) => item === curr.slug
    )
    return categoryInMockups ? [...acc, curr] : acc
  }, [])

export const removeDuplicates = (filteredCategories: Category[]): MenuItem[] =>
  filteredCategories.reduce((acc: MenuItem[], curr) => {
    const testTitle = (item: MenuItem): boolean => item.title === curr.title
    const c = acc.find(testTitle)
    const index = acc.findIndex(testTitle)

    if (c && index >= 0) {
      acc[index] = { ...c, slugs: [...c.slugs, curr.slug] }
      return acc
    }
    return [...acc, { title: curr.title, slugs: [curr.slug] }]
  }, [])

export const getFlattenCategories = (categories: Categories): Category[] =>
  categories.data.map((item) => [item, ...getCategoryChildren(item)]).flat()

export const getFilteredCategories = (
  categories: Categories,
  mockups: Mockups
): MenuItem[] => {
  const mockupCategories = getMockupsCategories(mockups)
  const allCategories = getFlattenCategories(categories)
  const filteredCategories = filterCategoriesByMockupCategories(
    allCategories,
    mockupCategories
  )
  return removeDuplicates(filteredCategories)
}
