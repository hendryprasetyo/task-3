import { produce } from 'immer'
import { SET_ALL_JORNEY } from './contants'

export const initialState = {
  jorney: [],
}

const userProfileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_ALL_JORNEY:
        draft.jorney = action.allJorney
        break
    }
  })

export default userProfileReducer
