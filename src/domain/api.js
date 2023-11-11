import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_URL_JSON_SERVER
const urls = {
  jorney: '/jorney',
  user: '/user',
  bookMark: '/book-mark',
}
export const callAPI = async ({
  endpoint,
  method,
  headers = {},
  params = {},
  data = {},
}) => {
  const option = {
    baseURL,
    url: endpoint,
    method,
    headers,
    params,
    data,
  }
  const response = await axios(option)
  return response?.data
}

export const getAllJorney = () => {
  return callAPI({ endpoint: urls.jorney, method: 'GET' })
}
export const getJorneyByUserId = userId => {
  return callAPI({ endpoint: `${urls.jorney}?userId=${userId}`, method: 'GET' })
}
export const getJorneyById = id => {
  return callAPI({ endpoint: `${urls.jorney}/${id}`, method: 'GET' })
}

export const login = data => {
  return callAPI({
    endpoint: `${urls.user}?email=${data?.email}`,
    method: 'GET',
  })
}

export const register = data => {
  return callAPI({
    endpoint: urls.user,
    method: 'POST',
    data,
  })
}

export const getUserProfileById = userId => {
  return callAPI({
    endpoint: `${urls.user}/${userId}`,
    method: 'GET',
  })
}

export const createJorney = data => {
  return callAPI({
    endpoint: urls.jorney,
    method: 'POST',
    data,
  })
}
export const updateJorney = (jorneyId, data) => {
  return callAPI({
    endpoint: `${urls.jorney}/${jorneyId}`,
    method: 'PUT',
    data,
  })
}
export const addToBookMark = data => {
  return callAPI({
    endpoint: urls.bookMark,
    method: 'POST',
    data,
  })
}
export const removeBookMark = bookMarkId => {
  return callAPI({
    endpoint: `${urls.bookMark}/${bookMarkId}`,
    method: 'DELETE',
  })
}

export const getBookMarkByJorneyIdUserId = data => {
  return callAPI({
    endpoint: `${urls.bookMark}?jorney.id=${data?.jorneyId}&userId=${data?.userId}`,
    method: 'GET',
  })
}
export const getAllBookMarkByUserId = userId => {
  return callAPI({
    endpoint: `${urls.bookMark}?userId=${userId}`,
    method: 'GET',
  })
}
