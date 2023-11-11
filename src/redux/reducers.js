import { combineReducers } from 'redux'
import homeReducer from '../pages/Home/reducer'
import loginReducer from '../pages/Login/reducer'
import registerReducer from '../pages/Register/reducer'
import createJorneyReducer from '../pages/AddJorney/reducer'
import bookMarkReducer from '../pages/BookMark/reducer'
import userProfileReducer from '../pages/Profile/reducer'
import detaiJorneyReducer from '../pages/DetailJorney/reducer'
const rootReducer = combineReducers({
  home: homeReducer,
  login: loginReducer,
  register: registerReducer,
  addJorney: createJorneyReducer,
  bookMark: bookMarkReducer,
  userProfile: userProfileReducer,
  detailJorney: detaiJorneyReducer,
})
export default rootReducer
