import { call, put, takeLatest } from 'redux-saga/effects'
import { USER_REGISTER } from './contants'
import { login, register } from '../../domain/api'
import toast from 'react-hot-toast'
import { registerSuccess } from './actions'

export function* doRegister({ data }) {
  try {
    const response = yield call(login, data)
    if (Object.keys(response).length > 0) {
      toast.error('Email has already exist')
    } else {
      yield call(register, data)
      yield put(registerSuccess())
      toast.success('Register Successfully')
    }
  } catch (error) {
    console.log(error)
    toast.error('register error', error.message)
  }
}

export function* registerSaga() {
  yield takeLatest(USER_REGISTER, doRegister)
}
