import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Header from './Header.jsx'
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
//import {faPhone} from '@fortawesome/free-solid-svg-icons'
//import Header from './Header.jsx'


function App() {
  let template=''
  let[pshow,setPshow]=useState(false)
  //let[count,setCount]=useState('1')
  
  if(pshow){
    template=<>
    <button onClick={()=>setPshow(!pshow)}>Hide</button>
    <p>welcome to ws</p>
    </>
  }
  else{
    template=<button onClick={()=>setPshow(!pshow)}>show</button>
  }
  
  // let displayData=()=>{
  //   setCount(count+1)
  // }

  return (
    <>
    {/* {count}
    <button onClick={displayData}>display data</button> */}
    
    
      
      
    
  
    </>
  );
}

export default App



