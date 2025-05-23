import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from './LoginPage.jsx'
import HomePage from './HomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginPage />
    <HomePage/>
  </StrictMode>,
)
