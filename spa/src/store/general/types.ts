export const INITIAL_LOAD_STARTED = 'INITIAL_LOAD_STARTED'
export const INITIAL_LOAD_SUCCESS = 'INITIAL_LOAD_SUCCESS'
export const INITIAL_LOAD_FAILED = 'INITIAL_LOAD_FAILED'

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

export type GeneralActions =
  | InitialLoadStarted
  | InitialLoadSuccess
  | InitialLoadFailed
export type GeneralState = GeneralInitialState
