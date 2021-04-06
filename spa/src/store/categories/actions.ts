import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { AppState } from '@store/rootReducer'
import { fetchCategories } from '../../services/api'

import {
  GET_CATEGORIES_START,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,
  GetCategoriesStarted,
  GetCategoriesSuccess,
  GetCategoriesFailed,
  Category,
  SetSelectedCategory,
  SET_SELECTED_CATEGORY
} from './types'

export const getCategoriesStarted = (): GetCategoriesStarted => ({
  type: GET_CATEGORIES_START
})

export const getCategoriesSuccess = (
  data: Category[]
): GetCategoriesSuccess => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: data
})

export const getCategoriesFailed = (error: Error): GetCategoriesFailed => ({
  type: GET_CATEGORIES_FAILED,
  payload: error
})

export const setSelectedCategory = (
  selectedCategory: string[]
): SetSelectedCategory => ({
  type: SET_SELECTED_CATEGORY,
  payload: selectedCategory
})

export const getCategories = (): ThunkAction<
  void,
  AppState,
  unknown,
  Action<string>
> => {
  return (dispatch) => {
    dispatch(getCategoriesStarted())

    return fetchCategories()
      .then((result) => {
        dispatch(getCategoriesSuccess(result as Category[]))
      })
      .catch((error: Error) => {
        dispatch(getCategoriesFailed(error))
      })
  }
}
