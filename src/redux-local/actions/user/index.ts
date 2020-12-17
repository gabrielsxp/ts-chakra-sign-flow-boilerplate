import { SET_USER, SET_TOKEN } from 'redux-local/actions'

export type UsersPermissionsMeRole = {
  id: number
  name: string
  description?: string
  type?: string
}

export type UserProps = {
  id: number
  username: string
  email: string
  confirmed?: boolean
  blocked?: boolean
  role?: UsersPermissionsMeRole
}

type PayloadProps = {
  user: UserProps
  token: string
}

export type ActionProps = {
  type: string
  payload: PayloadProps
}

export const setUser = (user: UserProps) => ({
  payload: user,
  type: SET_USER
})

export const setToken = (token: string | null) => ({
  payload: token,
  type: SET_TOKEN
})
