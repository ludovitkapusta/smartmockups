import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { AppState } from '../rootReducer'

export const INITIAL_LOAD_STARTED = 'INITIAL_LOAD_STARTED'
export const INITIAL_LOAD_SUCCESS = 'INITIAL_LOAD_SUCCESS'
export const INITIAL_LOAD_FAILED = 'INITIAL_LOAD_FAILED'
export const NEXT_REDUX_WRAPPER_HYDRATE = '__NEXT_REDUX_WRAPPER_HYDRATE__'

export interface InitialLoadStarted {
  type: typeof INITIAL_LOAD_STARTED
}

export interface InitialLoadSuccess {
  type: typeof INITIAL_LOAD_SUCCESS
}

export interface InitialLoadFailed {
  type: typeof INITIAL_LOAD_FAILED
  payload: Error
}

interface GeneralInitialState {
  loading: boolean
}

export interface InitialLoad {
  type: typeof NEXT_REDUX_WRAPPER_HYDRATE
  payload: AppState
}

export type AppThunkDispatch = ThunkDispatch<AppState, void, Action<string>>

export type GeneralActions =
  | InitialLoadStarted
  | InitialLoadSuccess
  | InitialLoadFailed
export type GeneralState = GeneralInitialState
