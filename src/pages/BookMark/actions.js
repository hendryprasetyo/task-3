import {
  DELETE_JORNEY_FROM_BOOK_MARK,
  GET_ALL_BOOK_MARK,
  SET_ALL_BOOK_MARK,
} from './contants'

export const setAllBookMark = data => ({
  type: SET_ALL_BOOK_MARK,
  data,
})
export const getAllBookMark = userId => ({
  type: GET_ALL_BOOK_MARK,
  userId,
})
export const deleteJorneyFromBookMark = data => ({
  type: DELETE_JORNEY_FROM_BOOK_MARK,
  data,
})
