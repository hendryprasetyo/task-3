import toast from 'react-hot-toast'

const validate = password => {
  let result = true
  if (password && password.length < 6) {
    result = false
    toast.error('Minimum character for password is 6')
  }
  return result
}
export default validate
