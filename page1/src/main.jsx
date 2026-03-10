import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import LoginType from './loginType/loginType.jsx'
import LoginType from './loginType/loginType'
// import Login1 from './login_pages/login_page1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginType />
  </StrictMode>
)
