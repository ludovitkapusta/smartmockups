import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { getCategories } from '../categories/actions'
import { getMockups } from '../mockups/actions'
import { AppState } from '../rootReducer'

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
  return async (dispatch) => {
    dispatch(initialLoadStarted())

    try {
      await Promise.all([dispatch(getCategories()), dispatch(getMockups())])
      dispatch(initialLoadSuccess())
    } catch (error) {
      dispatch(initialLoadFailed(error))
    }
  }
}
