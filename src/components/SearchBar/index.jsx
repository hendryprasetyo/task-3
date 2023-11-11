import React from 'react'
import styles from './searchBar.module.scss'
const SearchBar = ({ onChange, onClick, placeholder }) => {
  return (
    <div className={styles.wrapper__search}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
      />
      <button className={styles.btn} onClick={onClick}>
        Search
      </button>
    </div>
  )
}

export default SearchBar
