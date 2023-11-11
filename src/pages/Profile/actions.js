import { GET_JORNEY_BY_USER_ID, SET_ALL_JORNEY } from './contants'

export const getJorneyByUserId = userId => ({
  type: GET_JORNEY_BY_USER_ID,
  userId,
})
export const setAllJorney = allJorney => ({
  type: SET_ALL_JORNEY,
  allJorney,
})
