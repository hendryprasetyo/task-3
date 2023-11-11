import { call, takeLatest } from 'redux-saga/effects'
import { USER_LOGIN } from './contants'
import { login } from '../../domain/api'
import toast from 'react-hot-toast'

export function* doLogin({ data }) {
  try {
    const response = yield call(login, data)
    if (Object.keys(response).length === 0) {
      toast.error('user not found')
      return
    }
    if (response[0].password === data?.password) {
      const { password, ...rest } = response[0]
      localStorage.setItem('user', JSON.stringify(rest))
      window.location.href = '/'
    } else {
      toast.error('Invalid credential')
      return
    }
  } catch (error) {
    toast.error('Login error', error.message)
  }
}

export function* loginSaga() {
  yield takeLatest(USER_LOGIN, doLogin)
}
