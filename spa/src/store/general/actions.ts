import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { getCategories } from '@store/categories/actions'
import { getMockups } from '@store/mockups/actions'
import { AppState } from '@store/rootReducer'
import {
  InitialLoadFailed,
  InitialLoadStarted,
  InitialLoadSuccess,
  INITIAL_LOAD_FAILED,
  INITIAL_LOAD_STARTED,
  INITIAL_LOAD_SUCCESS
} from './types'

export const initialLoadStarted = (): InitialLoadStarted => ({
  type: INITIAL_LOAD_STARTED
})

export const initialLoadSuccess = (): InitialLoadSuccess => ({
  type: INITIAL_LOAD_SUCCESS
})

export const initialLoadFailed = (error: Error): InitialLoadFailed => ({
  type: INITIAL_LOAD_FAILED,
  payload: error
})

export const fetchAllData = (): ThunkAction<
  void,
  AppState,
  unknown,
  Action<string>
> => {
  return (dispatch) => {
    dispatch(initialLoadStarted())

    return Promise.all([dispatch(getCategories()), dispatch(getMockups())])
      .then(() => {
        dispatch(initialLoadSuccess())
      })
      .catch((error) => dispatch(initialLoadFailed(error)))
  }
}
