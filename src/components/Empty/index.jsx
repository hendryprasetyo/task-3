import styles from './empty.module.scss'
import RecyclingIcon from '@mui/icons-material/Recycling'

const Empty = ({ text }) => {
  return (
    <div className={styles.empty__wrapper}>
      <RecyclingIcon className={`${styles.icon} text`} />
      <p className="text">{text}</p>
    </div>
  )
}

export default Empty
