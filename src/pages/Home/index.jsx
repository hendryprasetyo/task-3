import React, { useEffect, useState } from 'react'
import styles from './home.module.scss'
import { Container } from '@mui/material'
import { Empty, HeadTitle, JorneyCard, SearchBar } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { addToBookMark, getAllJorney } from './actions'
import { useNavigate } from 'react-router-dom'
import sliceText from '../../lib/sliceText'
import toast from 'react-hot-toast'
const HomePage = () => {
  const dispatch = useDispatch()
  const [keyword, setKeyword] = useState('')
  const { user } = useSelector(state => state.login)
  const { jorney } = useSelector(state => state.home)
  const navigate = useNavigate()
  const [jorneyFiltered, setJorneyFiltered] = useState([])

  useEffect(() => {
    dispatch(getAllJorney())
  }, [])

  useEffect(() => {
    if (keyword) {
      const filterData = jorney?.filter(item =>
        item.title.toLowerCase().includes(keyword.toLowerCase())
      )
      setJorneyFiltered(filterData)
    } else {
      dispatch(getAllJorney())
    }
  }, [keyword])

  const handleChange = e => setKeyword(e.target.value)
  const handleSubmitSearch = e => {
    e.preventDefault()
    if (keyword) {
    }
  }
  const handleAddToBookMark = (e, data) => {
    e.preventDefault()
    if (data && user) {
      dispatch(addToBookMark({ userId: user?.id, jorney: data }))
    } else {
      toast.error('Please login first for your book mark')
    }
  }

  const handleDetail = jorneyId => {
    navigate(`/jorney/${jorneyId}`)
  }

  return (
    <>
      {!user && (
        <section className={styles.wrapper__banner}>
          <Container maxWidth="xl" className={styles.container}>
            <h1 className={styles.title__hero}>
              The Journey you ever dreamed of.
            </h1>
            <p className={styles.paragraf__hero}>
              We made a tool so you can easily keep & share your travel
              memories. But there is a lot more
            </p>
          </Container>
        </section>
      )}
      <section className={styles.wrapper__content}>
        <Container maxWidth="xxl">
          <div
            style={user ? { padding: '125px 0 50px 0' } : { padding: '51px 0' }}
          >
            <HeadTitle text={'Jorney'} />
          </div>
          <SearchBar
            placeholder={'Find Jorney'}
            onChange={handleChange}
            onClick={handleSubmitSearch}
          />
          <div className={styles.card__wrapper}>
            {keyword && jorneyFiltered.length === 0 ? (
              <Empty text={'Jorney not found'} />
            ) : !keyword && jorney?.length === 0 ? (
              <Empty text={'Jorney not found'} />
            ) : (
              (keyword ? jorneyFiltered : jorney)?.map(val => {
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
                      bookMark={e => handleAddToBookMark(e, val)}
                      data={dataCard}
                      details={() => handleDetail(val?.id)}
                      editFunc={() => navigate(`/user/edit-jorney/${val.id}`)}
                    />
                  </React.Fragment>
                )
              })
            )}
          </div>
        </Container>
      </section>
    </>
  )
}

export default HomePage
