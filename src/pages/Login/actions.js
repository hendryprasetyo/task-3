import { USER_LOGIN } from './contants'

export const login = data => ({
  type: USER_LOGIN,
  data,
})
