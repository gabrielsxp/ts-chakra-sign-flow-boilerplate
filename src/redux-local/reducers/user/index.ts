/* eslint-disable @typescript-eslint/no-explicit-any */
import { HYDRATE } from 'next-redux-wrapper'
import { UserProps } from 'redux-local/actions/user'
import { SET_USER, SET_TOKEN } from 'redux-local/actions'

export type InitialStateProps = {
  user: UserProps | null
  token: string | null
}

const initialState: InitialStateProps = {
  user: null,
  token: null
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload.user
    case SET_USER:
      if (action.payload.user) {
        state.user = { ...action.payload.user }
      } else {
        state.user = null
      }
      return state
    case SET_TOKEN:
      state.token = action.payload.token
      return state
    default:
      return state
  }
}

export default reducer
