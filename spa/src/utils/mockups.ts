import { Mockup, Mockups } from '@store/mockups/types'

// eslint-disable-next-line import/prefer-default-export
export const getMockupsCategories = (mockups: Mockups): string[] =>
  mockups.data.map((item) => item.category).flat()

export const getMockupsBySelectedCategory = (
  selectedCategory: string[],
  mockups: Mockup[]
): Mockup[] =>
  selectedCategory.find((cat) => cat === 'show-all')
    ? mockups
    : mockups.filter((item) =>
        item.category.find((cat) => selectedCategory.find((i) => i === cat))
      )
