import './App.css'
import React from 'react'
import  HomePage  from './pages/Home'
import AboutPage from './pages/About'
import { Router } from './Router'
import { Page404 } from './pages/404'
import { SearchPage } from './pages/Search'

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage

  },
  {
    path: '/search/:query', // quiero que busque //search/javascript search/react
    Component: SearchPage

  }
]



function App() {


  return (
    <main>
      <Router routes={routes} defaultComponent={Page404}/>
    </main>
  )
}

export default App
