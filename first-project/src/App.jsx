import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'


function App() {
  let Info={
    email:"pathakshivi881@gmail.com",
    phone:"9329763842"
  }
  

  return (
    <>
      <div className="main">
        <Header Information={Info} cname="cybrom">
          <h1>welcome to header section</h1>
        </Header>
       
      </div>
    </>
  );
}

export default App



