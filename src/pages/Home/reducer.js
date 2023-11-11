import { produce } from 'immer'
import { SET_ALL_BOOK_MARK, SET_ALL_JORNEY } from './contants'
export const initialState = {
  jorney: [],
  bookMark: [],
  addBookMarkStatus: false,
  isSuccess: false,
}

const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_ALL_JORNEY:
        draft.jorney = action.jorney
        draft.isSuccess = true
        break
      case SET_ALL_BOOK_MARK:
        draft.bookMark = action.bookMark
        draft.addBookMarkStatus = true
        break
    }
  })

export default homeReducer
