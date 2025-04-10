import { useEffect, useState } from 'react'
import './App.css'
import React from 'react'
import { EVENTS } from './consts'
import  HomePage  from './pages/Home'
import AboutPage from './pages/About'


function App() {

  const [currentPath, SetCurrentPath] = useState(window.location.pathname)

  useEffect(()=>{
    const onLocationChange = () =>{
      SetCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE,onLocationChange)

    return() =>{
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }

  },[])


  return (
    <main>
      <h1>ima router</h1>
      <HomePage/>
      <AboutPage/>
    </main>
  )
}

export default App
