import { produce } from 'immer'
import { RESET_ADD_JORNEY, SET_NEW_JORNEY, SET_UPDATE_JORNEY } from './contants'
export const initialState = {
  createDataStatus: false,
  updatedJorneyStatus: false,
}

const addJorneyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_NEW_JORNEY:
        draft.createDataStatus = true
        break
      case SET_UPDATE_JORNEY:
        draft.updatedJorneyStatus = true
        break
      case RESET_ADD_JORNEY:
        draft.createDataStatus = false
        draft.updatedJorneyStatus = false
        break
    }
  })

export default addJorneyReducer
