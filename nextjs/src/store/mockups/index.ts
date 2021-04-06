import { NEXT_REDUX_WRAPPER_HYDRATE } from '../general/types'
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

const mockups = (
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
    case NEXT_REDUX_WRAPPER_HYDRATE: {
      const newData = action.payload.mockups as MockupsState

      return {
        ...state,
        data: newData.data
      }
    }
    default:
      return state
  }
}

export default mockups
