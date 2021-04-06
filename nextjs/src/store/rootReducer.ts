import { combineReducers } from 'redux'

import general from './general'
import mockups from './mockups'
import categories from './categories'

import { GeneralState } from './general/types'
import { MockupsState } from './mockups/types'
import { CategoriesState } from './categories/types'

export interface AppState {
  [key: string]: GeneralState | MockupsState | CategoriesState
}

export default combineReducers({
  general,
  mockups,
  categories
})
