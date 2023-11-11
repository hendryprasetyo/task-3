import styles from './layout.module.scss'
import { Container } from '@mui/material'
import Icon from '../../assets/images/icon.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import avatar from '../../assets/images/avatar.svg'
import profileIcon from '../../assets/images/profile-icon.svg'
import leafIcon from '../../assets/images/leaf-icon.svg'
import markIcon from '../../assets/images/mark-icon.svg'
import logoutIcon from '../../assets/images/logout-icon.svg'
import triangleIcon from '../../assets/images/triangle-icon.svg'
import { useSelector } from 'react-redux'
import Modal from '../Modal'
const Navbar = () => {
  const user = useSelector(state => state.login.user)
  const [dropdown, setDropdown] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const styleNav = user
    ? {
        backgroundColor: '#F1F1F1',
        boxShadow: ' 0px 4px 36px 0px rgba(0, 0, 0, 0.25)',
        position: 'fixed',
        zIndex: '99',
      }
    : {}
  const handleLogout = () => {
    localStorage.removeItem('user')
    window.location.href = '/login'
    setOpenModal(false)
  }

  return (
    <>
      <Modal
        open={openModal}
        close={() => setOpenModal(false)}
        text={'Apa kamu yakin ingin keluar?'}
        oke={handleLogout}
      />
      <nav className={styles.nav} style={styleNav}>
        <Container maxWidth="xl" className={styles.container}>
          <div className={styles.icon}>
            <Link to={'/'}>
              <img src={Icon} alt="icon-brand" />
            </Link>
          </div>
          {user ? (
            <div
              className={styles.avatar}
              onClick={() => setDropdown(!dropdown)}
            >
              <img src={avatar} alt="avatar" className={styles.img} />
              <ul
                className={styles.dropdown}
                style={dropdown ? { display: 'flex' } : { display: 'none' }}
              >
                <img
                  src={triangleIcon}
                  alt="icon"
                  className={styles.triangle}
                />
                <li className={styles.link}>
                  <Link to={'/user/profile'}>
                    <img src={profileIcon} alt="icon" />
                    <h2 className={styles.title}>Profile</h2>
                  </Link>
                </li>
                <li className={styles.link}>
                  <Link to={'/user/new-jorney'}>
                    <img src={leafIcon} alt="icon" />
                    <h2 className={styles.title}>New Jorney</h2>
                  </Link>
                </li>
                <li className={styles.link}>
                  <Link to={'/user/book-mark'}>
                    <img src={markIcon} alt="icon" />
                    <h2 className={styles.title}>Book Mark</h2>
                  </Link>
                </li>
                <hr className={styles.hr} />
                <li className={styles.link}>
                  <Link onClick={() => setOpenModal(true)}>
                    <img src={logoutIcon} alt="icon" />
                    <h2 className={styles.title}>Logout</h2>
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <ul className={styles.nav__links}>
              <li className={styles.link}>
                <Link to={'/login'} className={styles.login}>
                  Login
                </Link>
              </li>
              <li className={styles.link}>
                <Link to={'/register'} className={styles.register}>
                  Register
                </Link>
              </li>
            </ul>
          )}
        </Container>
      </nav>
    </>
  )
}

export default Navbar
