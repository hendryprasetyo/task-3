import { useState } from 'react'
import styles from './login.module.scss'
import { HeadTitle } from '../../components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from './actions'
import validate from '../../lib/validate'
const LoginPage = () => {
  const [inputForm, setInputForm] = useState({
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

  const handleSubmit = e => {
    e.preventDefault()
    if (validate(inputForm.password)) {
      dispatch(login(inputForm))
    }
  }
  return (
    <section className={styles.container}>
      <div className={styles.form__wrapper}>
        <div className={styles.title}>
          <HeadTitle text={'Login'} />
        </div>
        <form action="#" className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.input__wrapper}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
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
              required
              onChange={handleChange}
              type="password"
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.btn__login}>
            Login
          </button>
          <div className={styles.login__footer}>
            <span>Don't have an account? Klik </span>
            <Link to={'/register'} className={styles.btn}>
              Here
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}

export default LoginPage
