import { produce } from 'immer'
import { SET_DETAIL_JORNEY } from './contants'
export const initialState = {
  detailJorney: null,
  isSuccess: false,
}

const detaiJorneyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_DETAIL_JORNEY:
        draft.detailJorney = action.dataJorney
        break
    }
  })

export default detaiJorneyReducer
