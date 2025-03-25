import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import Lesson from './Lesson.jsx'
import Key from './Key.jsx'
import Header from './list.jsx'
import List from './months.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting/>
    <App/>
    <Header/>
    <Lesson/>
    <Header/>
    <Key/>
    <Header/>
    <List/>
  </StrictMode>,
)
