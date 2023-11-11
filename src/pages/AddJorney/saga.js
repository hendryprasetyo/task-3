import { call, put, takeLatest } from 'redux-saga/effects'
import { CREATE_JORNEY, UPDATE_JORNEY } from './contants'
import { createJorney, updateJorney } from '../../domain/api'
import { setNewJorney, setUpdatepJorney } from './actions'
import toast from 'react-hot-toast'

export function* doCreateJorney({ data }) {
  try {
    const response = yield call(createJorney, data)
    if (response) {
      yield put(setNewJorney())
      toast.success('Jorney Created')
    }
  } catch (error) {
    toast.error('Create Jorney Error,' + error.message)
  }
}
export function* doUpdateJorney({ jorneyId, data }) {
  try {
    const response = yield call(updateJorney, jorneyId, data)
    if (response) {
      yield put(setUpdatepJorney())
      toast.success('Jorney Updated')
    }
  } catch (error) {
    toast.error('Create Jorney Error,' + error.message)
  }
}

export function* addJorneySaga() {
  yield takeLatest(CREATE_JORNEY, doCreateJorney)
  yield takeLatest(UPDATE_JORNEY, doUpdateJorney)
}
