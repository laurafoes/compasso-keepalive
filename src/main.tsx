import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './routes'
import { GlobalStyle } from './assets/styles/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
     <Router />
  </React.StrictMode>
)
