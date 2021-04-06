export const GET_CATEGORIES_START = 'GET_CATEGORIES_START'
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_FAILED = 'GET_CATEGORIES_FAILED'
export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY'

export type Category = {
  title: string
  slug: string
  children: Category[]
}

export interface Categories {
  loading: boolean
  data: Category[]
  selectedCategory: string[]
}

export interface GetCategoriesStarted {
  type: typeof GET_CATEGORIES_START
}

export interface GetCategoriesSuccess {
  type: typeof GET_CATEGORIES_SUCCESS
  payload: Category[]
}

export interface GetCategoriesFailed {
  type: typeof GET_CATEGORIES_FAILED
  payload: Error
}

export interface SetSelectedCategory {
  type: typeof SET_SELECTED_CATEGORY
  payload: string[]
}

export type CategoriesActions =
  | GetCategoriesStarted
  | GetCategoriesSuccess
  | GetCategoriesFailed
  | SetSelectedCategory
export type CategoriesState = Categories
