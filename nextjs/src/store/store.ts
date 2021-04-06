import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { MakeStore, createWrapper } from 'next-redux-wrapper'

import rootReducer, { AppState } from './rootReducer'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

// create a makeStore function
const makeStore: MakeStore<AppState> = () => store

// export an assembled wrapper
export const wrapper = createWrapper<AppState>(makeStore)

export default store
