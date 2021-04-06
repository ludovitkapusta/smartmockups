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

export default (
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
    default:
      return state
  }
}
