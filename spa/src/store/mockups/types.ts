export const GET_MOCKUPS_START = 'GET_MOCKUPS_START'
export const GET_MOCKUPS_SUCCESS = 'GET_MOCKUPS_SUCCESS'
export const GET_MOCKUPS_FAILED = 'GET_MOCKUPS_FAILED'

export interface Mockups {
  loading: boolean
  data: Mockup[]
}

export interface Mockup {
  id: string
  title: string
  category: string[]
  thumb: string
}

export interface GetMockupsStarted {
  type: typeof GET_MOCKUPS_START
}

export interface GetMockupsSuccess {
  type: typeof GET_MOCKUPS_SUCCESS
  payload: Mockup[]
}

export interface GetMockupsFailed {
  type: typeof GET_MOCKUPS_FAILED
  payload: Error
}

export type MockupsActions =
  | GetMockupsStarted
  | GetMockupsSuccess
  | GetMockupsFailed
export type MockupsState = Mockups
