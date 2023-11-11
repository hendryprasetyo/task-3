import { call, put, takeLatest } from 'redux-saga/effects'
import { ADD_TO_BOOK_MARK, GET_ALL_JORNEY } from './contants'
import {
  addToBookMark,
  getAllJorney,
  getBookMarkByJorneyIdUserId,
  removeBookMark,
} from '../../domain/api'
import { setAllJorney } from './actions'
import toast from 'react-hot-toast'

export function* doGetAllJorney() {
  try {
    const response = yield call(getAllJorney)
    yield put(setAllJorney(response))
  } catch (error) {
    toast.error('error fetching' + error.message)
  }
}
export function* doAddToBookMark({ data }) {
  const dataGetBookmark = { userId: data?.userId, jorneyId: data?.jorney?.id }
  try {
    const bookMark = yield call(getBookMarkByJorneyIdUserId, dataGetBookmark)
    if (Object.keys(bookMark).length === 0) {
      yield call(addToBookMark, data)
      toast.success('Jorney added')
    } else {
      yield call(removeBookMark, bookMark[0]?.id)
      toast.success('Jorney deleted')
    }
  } catch (error) {
    toast.error('error fetching' + error.message)
  }
}

export function* homeSaga() {
  yield takeLatest(GET_ALL_JORNEY, doGetAllJorney)
  yield takeLatest(ADD_TO_BOOK_MARK, doAddToBookMark)
}
