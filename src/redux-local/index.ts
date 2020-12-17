import { createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { combineReducers } from 'redux'
import { InitialStateProps as UserInitialStateProps } from 'redux-local/reducers/user'
import userReducer from 'redux-local/reducers/user'

export type ReducersProps = {
  userReducer: UserInitialStateProps
}

const reducer = combineReducers({
  userReducer
})

const buildStore = () => {
  const c = createStore
  const store = c(reducer, composeWithDevTools())

  return store
}

export const storeWrapper = createWrapper(buildStore, { debug: false })
