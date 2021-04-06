/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createStore, combineReducers } from 'redux'
import { initialState } from '../src/store/general'

const store = (data) => {
  const componentData = {
    config: data,
    general: initialState
  }

  return createStore(
    combineReducers({
      [componentData.config.componentSettings.name]: (
        state = componentData.config
      ) => state,
      general: (state = componentData.general) => state
    })
  )
}

export default store
