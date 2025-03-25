import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import Lesson from './Lesson.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting/>
    <App/>
    <Lesson/>
  </StrictMode>,
)
