import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import btnModule from "./Button.module.css" 
//import Header from './Header.jsx'
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
//import {faPhone} from '@fortawesome/free-solid-svg-icons'
//import Header from './Header.jsx'


function App() {


  return (
    <>
    <div className="App">
      <button className={btnModule.error}>error</button>
      <button className={btnModule.warning}>warning</button>
    </div>

    </>
  )
  
  

}

export default App



