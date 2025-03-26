import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Food from './Food'
import Greeting from './Greeting'


function Button(props) {
  const buttonStyle ={
    color: props.color,
    fontSize: props.fontSize + 'px'
  };

  return(
    <button style={buttonStyle}>{props.text}</button>
  );
}

function App() {
 
  return (
    <div>
     
      <h2>My Favorite foods</h2>
      <Food text="Click"/>
      <Button text="Click Me" color="Bliue" fontSize={12}/>
      <Button text="Don't Click Me!" color="red" fontSize={20} />
      <Button text="Click Me!" color="blue" fontSize={20} />
    </div>

  )
}

export default App;
