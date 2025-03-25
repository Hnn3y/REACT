import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Food from './Food'
import Greeting from './Greeting'
import Video from './Video'

function App() {
 
  return (
    <div>
      <div>
      <h2>My Favorite foods</h2>
      <Food/>
      </div>
    </div>

  )
}

export default App;
