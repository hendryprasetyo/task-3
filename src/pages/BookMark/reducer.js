import { produce } from 'immer'
import { SET_ALL_BOOK_MARK } from './contants'
export const initialState = {
  bookMark: [],
  isSuccess: false,
}

const bookMarkReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_ALL_BOOK_MARK:
        draft.bookMark = action.data
        draft.isSuccess = true
        break
    }
  })

export default bookMarkReducer
