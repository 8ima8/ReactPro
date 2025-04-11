import './App.css'
import React, { Suspense } from 'react'
import { lazy } from 'react'
//import  HomePage  from './pages/Home'
//import estatico
import { Router } from './Router'
import { Route } from './Route'
import { Page404 } from './pages/404'
import { SearchPage } from './pages/Search'

//import dinamico
const LazyAboutPage= lazy(()=> import ('./pages/About.jsx'))
const LazyHomePage= lazy(()=> import ('./pages/Home.jsx'))

const routes = [
  {
    path: '/search/:query', // quiero que busque //search/javascript search/react
    Component: SearchPage

  }
]



function App() {


  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
      <Router routes={routes} defaultComponent={Page404}>
        <Route path='/' Component={LazyHomePage}/>
        <Route path='/about' Component={LazyAboutPage}/>
      </Router>
      </Suspense>
    </main>
  )
}

export default App
