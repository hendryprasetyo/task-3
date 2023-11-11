import Footer from './Footer'
import Navbar from './Navbar'
import styles from './layout.module.scss'
import { Outlet, useLocation } from 'react-router-dom'
const MainLayout = () => {
  const { pathname } = useLocation()
  return (
    <>
      <Navbar />
      <main
        className={styles.main__container}
        style={pathname !== '/' ? { paddingTop: '145px' } : {}}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
