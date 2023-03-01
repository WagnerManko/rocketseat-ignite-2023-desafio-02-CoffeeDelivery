import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.scss'
import { Home } from './pages/Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
