import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import React from 'react'
import { App } from './App'
import './index.css'

//import React from 'react' 6.9k (gzipped: 2.7k)
//import ReactDOM from 'react-dom/client' 513 (gzipped:319)


/*createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/

/*const root = ReactDOM.createRoot(document.getElementById('root'))
const SpecialButton = ({text}) => {
  return(<button>
      {text}
      </button>)
}*/

/*root.render(
  <React.Fragment>
    <SpecialButton text="Button 1"/>
    <SpecialButton text="Button 2"/>
  </React.Fragment>
)*/
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

    <App />
  
)
