import styles from './profile.module.scss'
import { Container } from '@mui/material'
import { Empty, HeadTitle, JorneyCard } from '../../components'
import avatar from '../../assets/images/avatar.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { getJorneyByUserId } from './actions'
import { addToBookMark } from '../Home/actions'
import sliceText from '../../lib/sliceText'
const ProfilePage = () => {
  const { user } = useSelector(state => state.login)
  const { jorney } = useSelector(state => state.userProfile)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleAddToBookMark = (e, data) => {
    e.preventDefault()
    if (data) {
      dispatch(addToBookMark({ userId: user?.id, jorney: data }))
    }
  }

  const handleDetail = jorneyId => {
    navigate(`/jorney/${jorneyId}`)
  }
  useEffect(() => {
    dispatch(getJorneyByUserId(user?.id))
  }, [])
  return (
    <section className={styles.wrapper}>
      <Container maxWidth="xl">
        <HeadTitle text={'Profile'} />
        <div className={styles.wrapper__profile}>
          <img src={avatar} alt="avatar" className={styles.avatar} />
          <h2 className={styles.name__user}>{user?.full_name}</h2>
          <span className={styles.email__user}>{user?.email}</span>
          <Link to={'/user/new-jorney'} className={styles.btn}>
            Add New Post
          </Link>
        </div>
        <div className={styles.card__wrapper}>
          {jorney?.length > 0 ? (
            jorney?.map(val => {
              const text = sliceText(val?.short_description, 270)
              const dataCard = {
                image: val?.image,
                title: val?.title,
                short_description: text,
                created_at: val?.created_at,
                author: val?.author,
                userId: val?.userId,
              }
              return (
                <React.Fragment key={val?.id}>
                  <JorneyCard
                    data={dataCard}
                    bookMark={e => handleAddToBookMark(e, val)}
                    details={() => handleDetail(val?.id)}
                    editFunc={() => navigate(`/user/edit-jorney/${val.id}`)}
                  />
                </React.Fragment>
              )
            })
          ) : (
            <Empty
              text={"You don't have a jorney, add your jorney for the everyone"}
            />
          )}
        </div>
      </Container>
    </section>
  )
}

export default ProfilePage
