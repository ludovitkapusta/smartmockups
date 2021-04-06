import { Mockup, Mockups } from '../store/mockups/types'

export const getMockupsCategories = (mockups: Mockups): string[] =>
  !!mockups.data.length && mockups.data.map((item) => item.category).flat()

export const getMockupsBySelectedCategory = (
  selectedCategory: string[],
  mockups: Mockup[]
): Mockup[] =>
  selectedCategory.find((cat) => cat === 'show-all')
    ? mockups
    : mockups.filter((item) =>
        item.category.find((cat) => selectedCategory.find((i) => i === cat))
      )
