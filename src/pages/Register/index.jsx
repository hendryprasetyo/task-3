import styles from './register.module.scss'
import { HeadTitle } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import validate from '../../lib/validate'
import { register } from './actions'
import { useNavigate } from 'react-router-dom'
const RegisterPage = () => {
  const navigate = useNavigate()
  const { isSuccess } = useSelector(state => state.register)

  const [inputForm, setInputForm] = useState({
    full_name: '',
    email: '',
    password: '',
  })
  const dispatch = useDispatch()
  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    setInputForm(prev => ({
      ...prev,
      [name]: value,
    }))
  }
  useEffect(() => {
    let timeout

    if (isSuccess) {
      setInputForm({
        full_name: '',
        email: '',
        password: '',
      })

      timeout = setTimeout(() => {
        navigate('/login')
      }, 1000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [isSuccess])

  const handleSubmit = e => {
    e.preventDefault()
    if (validate(inputForm.password)) {
      dispatch(register(inputForm))
    }
  }
  return (
    <section className={styles.container}>
      <div className={styles.form__wrapper}>
        <div className={styles.title}>
          <HeadTitle text={'Register'} />
        </div>
        <form action="#" className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.input__wrapper}>
            <label htmlFor="full-name" className={styles.label}>
              Full Name
            </label>
            <input
              name="full_name"
              onChange={handleChange}
              type="text"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.input__wrapper}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              name="email"
              onChange={handleChange}
              type="email"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.input__wrapper}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              name="password"
              onChange={handleChange}
              type="password"
              required
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.btn__register}>
            Register
          </button>
        </form>
      </div>
    </section>
  )
}

export default RegisterPage
