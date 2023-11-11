import {
  ADD_TO_BOOK_MARK,
  GET_ALL_JORNEY,
  SET_ALL_BOOK_MARK,
  SET_ALL_JORNEY,
} from './contants'

export const getAllJorney = () => ({
  type: GET_ALL_JORNEY,
})
export const setAllJorney = jorney => ({
  type: SET_ALL_JORNEY,
  jorney,
})
export const addToBookMark = data => ({
  type: ADD_TO_BOOK_MARK,
  data,
})
export const setAllBookMark = data => ({
  type: SET_ALL_BOOK_MARK,
  bookMark: data,
})
