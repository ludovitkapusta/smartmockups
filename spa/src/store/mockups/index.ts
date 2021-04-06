import {
  MockupsState,
  MockupsActions,
  GET_MOCKUPS_START,
  GET_MOCKUPS_SUCCESS,
  GET_MOCKUPS_FAILED
} from './types'

export const initialState: MockupsState = {
  loading: false,
  data: []
}

export default (
  state: MockupsState = initialState,
  action: MockupsActions
): MockupsState => {
  switch (action.type) {
    case GET_MOCKUPS_START: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_MOCKUPS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    }
    case GET_MOCKUPS_FAILED: {
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
