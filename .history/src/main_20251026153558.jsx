import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './Router.jsx'
import {router} from './Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router router={route}/>
  </StrictMode>,
)
