import {
  GeneralActions,
  GeneralState,
  INITIAL_LOAD_FAILED,
  INITIAL_LOAD_STARTED,
  INITIAL_LOAD_SUCCESS
} from './types'

export const initialState: GeneralState = {
  loading: false
}

export default (
  state: GeneralState = initialState,
  action: GeneralActions
): GeneralState => {
  switch (action.type) {
    case INITIAL_LOAD_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case INITIAL_LOAD_STARTED:
      return {
        ...state,
        loading: true
      }
    case INITIAL_LOAD_FAILED:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
