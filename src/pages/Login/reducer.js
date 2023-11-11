import { produce } from 'immer'
const getUserfromLocalStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null
export const initialState = {
  user: getUserfromLocalStorage,
}

const loginReducer = (state = initialState, action) =>
  produce(state, draft => {})

export default loginReducer
