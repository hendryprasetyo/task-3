import styles from './detailJorney.module.scss'
import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailJorney } from './actions'
import moment from 'moment'
const DetailJorneyPage = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const { detailJorney } = useSelector(state => state.detailJorney)
  useEffect(() => {
    if (params?.jorneyId) {
      dispatch(getDetailJorney(params?.jorneyId))
    }
  }, [params])
  const formatDate = moment(detailJorney?.created_at).format('DD MMMM YYYY')

  return (
    <Container maxWidth="xl">
      <div className={styles.head__title}>
        <h1 className={styles.title}>{detailJorney?.title}</h1>
        <h2 className={styles.author}>{detailJorney?.author}</h2>
      </div>
      <span className={styles.time__stamp}>{formatDate}</span>
      <div className={styles.cover__img}>
        <img
          src={detailJorney?.image}
          alt="main-image-detail"
          className={styles.img}
        />
      </div>
      {/* description rendering */}
      <div
        dangerouslySetInnerHTML={{ __html: detailJorney?.description }}
        className={styles.description}
      />
    </Container>
  )
}

export default DetailJorneyPage
