import { produce } from 'immer'
import { USER_REGISTER_SUCCESS } from './contants'

export const initialState = {
  user: {},
  isSuccess: false,
  isError: false,
  message: '',
}

const registerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case USER_REGISTER_SUCCESS:
        draft.isSuccess = true
        draft.message = 'Register Successfully'
        break
    }
  })

export default registerReducer
