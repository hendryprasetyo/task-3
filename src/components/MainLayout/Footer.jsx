import React from 'react'
import styles from './layout.module.scss'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <span className={`text`}>
          &copy; {new Date().getFullYear()}. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
