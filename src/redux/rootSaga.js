import { all } from 'redux-saga/effects'
import { homeSaga } from '../pages/Home/saga'
import { loginSaga } from '../pages/Login/saga'
import { registerSaga } from '../pages/Register/saga'
import { addJorneySaga } from '../pages/AddJorney/saga'
import { bookMarkSaga } from '../pages/BookMark/saga'
import { userProfileSaga } from '../pages/Profile/saga'
import { detailJorneySaga } from '../pages/DetailJorney/saga'
export default function* rootSaga() {
  yield all([
    homeSaga(),
    loginSaga(),
    registerSaga(),
    addJorneySaga(),
    bookMarkSaga(),
    userProfileSaga(),
    detailJorneySaga(),
  ])
}
