import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { fetchMockups } from '../../services/api'
import { AppState } from '../rootReducer'

import {
  GET_MOCKUPS_START,
  GET_MOCKUPS_SUCCESS,
  GET_MOCKUPS_FAILED,
  GetMockupsStarted,
  GetMockupsSuccess,
  GetMockupsFailed,
  Mockup
} from './types'

export const getMockupsStarted = (): GetMockupsStarted => ({
  type: GET_MOCKUPS_START
})

export const getMockupsSuccess = (data: Mockup[]): GetMockupsSuccess => ({
  type: GET_MOCKUPS_SUCCESS,
  payload: data
})

export const getMockupsFailed = (error: Error): GetMockupsFailed => ({
  type: GET_MOCKUPS_FAILED,
  payload: error
})

export const getMockups = (): ThunkAction<
  void,
  AppState,
  unknown,
  Action<string>
> => {
  return async (dispatch) => {
    dispatch(getMockupsStarted())

    try {
      const result = await fetchMockups()
      dispatch(getMockupsSuccess(result as Mockup[]))
    } catch (error) {
      dispatch(getMockupsFailed(error))
    }
  }
}
