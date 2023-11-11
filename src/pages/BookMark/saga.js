import { call, put, takeLatest } from 'redux-saga/effects'
import { DELETE_JORNEY_FROM_BOOK_MARK, GET_ALL_BOOK_MARK } from './contants'
import { getAllBookMarkByUserId, removeBookMark } from '../../domain/api'
import { setAllBookMark } from './actions'
import toast from 'react-hot-toast'

export function* doBookMark({ userId }) {
  try {
    const response = yield call(getAllBookMarkByUserId, userId)
    yield put(setAllBookMark(response))
  } catch (error) {
    toast.error('Create Jorney Error,' + error.message)
  }
}

export function* doDeleteJorney({ data }) {
  try {
    yield call(removeBookMark, data?.bookMarkId)
    const response = yield call(getAllBookMarkByUserId, data?.userId)
    yield put(setAllBookMark(response))
    toast.success('Jorney deleted')
  } catch (error) {
    console.log(error)
  }
}
export function* bookMarkSaga() {
  yield takeLatest(GET_ALL_BOOK_MARK, doBookMark)
  yield takeLatest(DELETE_JORNEY_FROM_BOOK_MARK, doDeleteJorney)
}
