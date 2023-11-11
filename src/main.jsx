import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/configureStore.js'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './styles/_main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Toaster />
      <App />
    </BrowserRouter>
  </Provider>
)
