import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_JORNEY_BY_USER_ID } from './contants'
import { getJorneyByUserId } from '../../domain/api'
import toast from 'react-hot-toast'
import { setAllJorney } from './actions'

export function* doGetJorneyByUserId({ userId }) {
  try {
    const response = yield call(getJorneyByUserId, userId)
    yield put(setAllJorney(response))
  } catch (error) {
    toast.error('Login error', error.message)
  }
}

export function* userProfileSaga() {
  yield takeLatest(GET_JORNEY_BY_USER_ID, doGetJorneyByUserId)
}
