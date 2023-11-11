import styles from './bookMark.module.scss'
import { Container } from '@mui/material'
import { Empty, HeadTitle, JorneyCard } from '../../components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { deleteJorneyFromBookMark, getAllBookMark } from './actions'
import sliceText from '../../lib/sliceText'
const BookMarkPage = () => {
  const { user } = useSelector(state => state.login)
  const { bookMark } = useSelector(state => state.bookMark)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    if (user) {
      dispatch(getAllBookMark(user?.id))
    }
  }, [])
  const handleDeleteJorney = (e, data) => {
    e.preventDefault()
    if (bookMark) {
      dispatch(deleteJorneyFromBookMark(data))
    }
  }

  const handleDetail = jorneyId => {
    navigate(`/jorney/${jorneyId}`)
  }
  return (
    <section className={styles.wrapper}>
      <Container maxWidth="xl">
        <HeadTitle text={'Book Mark'} />
        <div className={styles.card__wrapper}>
          {bookMark?.length > 0 ? (
            bookMark?.map(val => {
              const dataDelete = { bookMarkId: val?.id, userId: val?.userId }
              const text = sliceText(val?.jorney?.short_description, 270)
              const dataCard = {
                image: val?.jorney?.image,
                title: val?.jorney?.title,
                short_description: text,
                created_at: val?.jorney?.created_at,
                author: val?.jorney?.author,
                userId: val?.jorney?.userId,
              }
              return (
                <React.Fragment key={val?.id}>
                  <JorneyCard
                    bookMark={e => handleDeleteJorney(e, dataDelete)}
                    data={dataCard}
                    details={() => handleDetail(index)}
                    editFunc={() =>
                      navigate(`/user/edit-jorney/${val?.jorney?.id}`)
                    }
                  />
                </React.Fragment>
              )
            })
          ) : (
            <Empty text={'Book Mark is Empty'} />
          )}
        </div>
      </Container>
    </section>
  )
}

export default BookMarkPage
