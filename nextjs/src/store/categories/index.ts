import { NEXT_REDUX_WRAPPER_HYDRATE } from '../general/types'
import {
  CategoriesActions,
  GET_CATEGORIES_START,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,
  CategoriesState,
  SET_SELECTED_CATEGORY
} from './types'

export const initialState: CategoriesState = {
  loading: false,
  data: [],
  selectedCategory: ['show-all']
}

const categories = (
  state: CategoriesState = initialState,
  action: CategoriesActions
): CategoriesState => {
  switch (action.type) {
    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload
      }
    case GET_CATEGORIES_START: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    }
    case GET_CATEGORIES_FAILED: {
      return {
        ...state,
        ...action.payload,
        loading: false
      }
    }
    case NEXT_REDUX_WRAPPER_HYDRATE: {
      const newData = action.payload.categories as CategoriesState

      return {
        ...state,
        data: newData.data
      }
    }
    default:
      return state
  }
}

export default categories
