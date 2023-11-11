import {
  CREATE_JORNEY,
  RESET_ADD_JORNEY,
  SET_NEW_JORNEY,
  SET_UPDATE_JORNEY,
  UPDATE_JORNEY,
} from './contants'

export const createJorney = data => ({
  type: CREATE_JORNEY,
  data,
})
export const updateJorney = (jorneyId, data) => ({
  type: UPDATE_JORNEY,
  jorneyId,
  data,
})
export const setNewJorney = () => ({
  type: SET_NEW_JORNEY,
})
export const setUpdatepJorney = () => ({
  type: SET_UPDATE_JORNEY,
})
export const resetAddJorney = () => ({
  type: RESET_ADD_JORNEY,
})
