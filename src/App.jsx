import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  DetailJorneyPage,
  BookMarkPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  ProfilePage,
  RegisterPage,
  AddJorneyPage,
} from './pages'
import { MainLayout } from './components'
import { ProtectRoute, UnProtectRoute } from './lib'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="user/book-mark"
          element={
            <ProtectRoute>
              <BookMarkPage />
            </ProtectRoute>
          }
        />
        <Route
          path="user/profile"
          element={
            <ProtectRoute>
              <ProfilePage />
            </ProtectRoute>
          }
        />
        <Route
          path="user/new-jorney"
          element={
            <ProtectRoute>
              <AddJorneyPage />
            </ProtectRoute>
          }
        />
        <Route
          path="user/edit-jorney/:jorneyId"
          element={
            <ProtectRoute>
              <AddJorneyPage />
            </ProtectRoute>
          }
        />

        <Route path="jorney/:jorneyId" element={<DetailJorneyPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      <Route
        path="/login"
        element={
          <UnProtectRoute>
            <LoginPage />
          </UnProtectRoute>
        }
      />
      <Route
        path="/register"
        element={
          <UnProtectRoute>
            <RegisterPage />
          </UnProtectRoute>
        }
      />
    </Routes>
  )
}

export default App
