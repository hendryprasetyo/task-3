import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_DETAIL_JORNEY } from './contants'
import { getJorneyById } from '../../domain/api'
import { setDetailJorney } from './actions'
import toast from 'react-hot-toast'

export function* doGetDetailJorney({ id }) {
  try {
    const response = yield call(getJorneyById, id)
    yield put(setDetailJorney(response))
  } catch (error) {
    toast.error('Create Jorney Error,' + error.message)
  }
}

export function* detailJorneySaga() {
  yield takeLatest(GET_DETAIL_JORNEY, doGetDetailJorney)
}
