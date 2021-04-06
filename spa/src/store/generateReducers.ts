/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createStore,
  combineReducers,
  Reducer,
  Action,
  ReducersMapObject
} from 'redux'

import general from '@store/general'
import mockups from '@store/mockups'
import categories from '@store/categories'
import { AppState } from './rootReducer'

// Preload all possible reducers
export const reducers: any = {
  general,
  mockups,
  categories
}

/** Creates default reducer providing only initial state */
export const defaultReducer = (data: AppState): Reducer => (
  state: AppState = data,
  action: Action
): AppState => {
  switch (action.type) {
    default:
      return state
  }
}

/**  Will generate reducers on base of JS_CONFIG */
export const generateClientReducers = (
  initialData: Record<string, any>
): ReducersMapObject<unknown, any> =>
  Object.keys(initialData).reduce((acc, curr) => {
    const reducerName = initialData[curr]?.componentSettings?.name

    return {
      ...acc,
      [curr]: reducers[reducerName]
        ? reducers[reducerName]
        : defaultReducer(initialData[curr])
    }
  }, {})

/**  Will merge default data base of JS_CONFIG and initial states of specified reducers */
export const combinedInitialState = (
  initialData: Record<string, any>
): ReducersMapObject<unknown, any> =>
  Object.keys(initialData).reduce((acc, curr) => {
    const reducerName = initialData[curr]?.componentSettings?.name

    return reducers[reducerName]
      ? {
          ...acc,
          [curr]: {
            ...(createStore(
              combineReducers({ [curr]: reducers[reducerName] })
            ).getState()[curr as string] as Reducer),
            ...initialData[curr]
          }
        }
      : acc
  }, {})

/**  Will generate reducer on base of initial data from BE */
export const generateSSRreducer = (
  initialData: Record<string, any>
): ReducersMapObject<unknown, any> => {
  const reducerName = initialData?.componentSettings?.name

  return {
    [reducerName]: reducers[reducerName]
      ? reducers[reducerName]
      : defaultReducer(initialData)
  }
}

/**  Will merge default data base of initial data from BE and initial states of specified reducers */
export const combinedSSRInitialState = (
  initialData: Record<string, any>
): ReducersMapObject<unknown, any> => {
  const reducerName = initialData?.componentSettings?.name

  return reducers[reducerName]
    ? {
        [reducerName]: {
          ...(createStore(reducers[reducerName]).getState() as Reducer),
          ...initialData
        }
      }
    : {}
}
