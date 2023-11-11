import React from 'react'
import styles from './headTitle.module.scss'
const HeadTitle = ({ text }) => {
  return <h1 className={styles.text}>{text}</h1>
}

export default HeadTitle
