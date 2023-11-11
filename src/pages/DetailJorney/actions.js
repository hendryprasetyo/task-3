import { GET_DETAIL_JORNEY, SET_DETAIL_JORNEY } from './contants'

export const getDetailJorney = id => ({
  type: GET_DETAIL_JORNEY,
  id,
})
export const setDetailJorney = dataJorney => ({
  type: SET_DETAIL_JORNEY,
  dataJorney,
})
