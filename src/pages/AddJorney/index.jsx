import styles from './addJorney.module.scss'
import { Container } from '@mui/material'
import { HeadTitle } from '../../components'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { createJorney, resetAddJorney, updateJorney } from './actions'
import { useParams } from 'react-router-dom'
import { getDetailJorney } from '../DetailJorney/actions'

const AddJorneyPage = () => {
  const { user } = useSelector(state => state.login)
  const { createDataStatus, updatedJorneyStatus } = useSelector(
    state => state.addJorney
  )
  const dispatch = useDispatch()
  const currentDate = new Date()
  const { jorneyId } = useParams()
  const { detailJorney } = useSelector(state => state.detailJorney)

  const [inputForm, setInputForm] = useState({
    title: detailJorney?.title || '',
    image: detailJorney?.image || '',
    short_description: detailJorney?.short_description || '',
    description: detailJorney?.description || '',
    author: user?.full_name,
    userId: user?.id,
    created_at: currentDate,
    updated_at: currentDate,
  })
  useEffect(() => {
    if (jorneyId) {
      dispatch(getDetailJorney(jorneyId))
    }
  }, [jorneyId])
  useEffect(() => {
    if (jorneyId && detailJorney) {
      setInputForm({
        title: detailJorney?.title || '',
        image: detailJorney?.image || '',
        short_description: detailJorney?.short_description || '',
        description: detailJorney?.description || '',
        author: detailJorney?.author,
        userId: user?.id,
        created_at: currentDate,
        updated_at: currentDate,
      })
    }
    return () => {
      setInputForm({
        title: '',
        image: '',
        short_description: '',
        description: '',
        author: user?.full_name,
        userId: user?.id,
        created_at: currentDate,
        updated_at: currentDate,
      })
    }
  }, [jorneyId, detailJorney])
  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    setInputForm(prev => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleDescriptionChange = description => {
    const isEmptyParagraph = /^<p><br><\/p>$/i.test(description)
    const updatedDescription = isEmptyParagraph ? null : description
    setInputForm(prev => ({
      ...prev,
      description: updatedDescription,
    }))
  }
  const validate = () => {
    let result = true
    if (inputForm.description === '' || inputForm.description === null) {
      result = false
      toast.error('Description is required')
    }
    return result
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (validate()) {
      if (jorneyId) {
        dispatch(updateJorney(jorneyId, inputForm))
      } else {
        dispatch(createJorney(inputForm))
      }
    }
  }

  useEffect(() => {
    if (createDataStatus || updatedJorneyStatus) {
      setInputForm({
        title: '',
        image: '',
        short_description: '',
        description: '',
        author: user?.full_name,
        userId: user?.id,
        created_at: currentDate,
        updated_at: currentDate,
      })
      dispatch(resetAddJorney())
    }
  }, [createDataStatus, updatedJorneyStatus])
  return (
    <Container maxWidth="xl">
      <HeadTitle text={jorneyId ? 'Edit Jorney' : 'New Jorney'} />
      <form action="#" className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.wrapper__input}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            name="title"
            type="text"
            required
            value={inputForm.title}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.wrapper__input}>
          <label htmlFor="image-url" className={styles.label}>
            Image Url
          </label>
          <input
            name="image"
            type="text"
            required
            value={inputForm.image}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.wrapper__input}>
          <label htmlFor="short-description" className={styles.label}>
            Short Description
          </label>
          <input
            name="short_description"
            value={inputForm.short_description}
            type="text"
            required
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.wrapper__input}>
          <label htmlFor="short-description" className={styles.label}>
            Description
          </label>
          <ReactQuill
            theme="snow"
            value={inputForm.description}
            onChange={handleDescriptionChange}
            className={styles.description}
          />
        </div>
        <div className={styles.wrapper__btn}>
          <button className={styles.btn__submit} type="submit">
            Post
          </button>
        </div>
      </form>
    </Container>
  )
}

export default AddJorneyPage
