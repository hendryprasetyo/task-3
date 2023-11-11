import React from 'react'
import styles from './dropdown.module.scss'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

const DropDown = () => {
  return (
    <div className={StyleSheet.wrapper}>
      <div className={styles.content}>
        <PersonOutlineOutlinedIcon />
        <h2 className={styles.title}>Profile</h2>
      </div>
    </div>
  )
}

export default DropDown
