//import { useState } from 'react'
import './App.css'
import { useEffect, useRef } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useState } from 'react'
import { useCallback } from 'react'
import debounce from 'just-debounce-it'
import React from 'react'

function useSearch (){
  const [search, updateSearch] = useState('')
  const [error, setError]= useState(null)
  const isFirstInput= useRef(true)

  useEffect(()=>{
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)

  },[search])

  return{search, updateSearch, error} 
}

function App() {
  //const {movies:mappedMovies} = useMovies()
  const [sort, setSort] = useState(false)

  const {search, updateSearch, error} = useSearch()
  const {movies,loading,getMovies} = useMovies({search,sort})

  const debouncedGetMovies = useCallback(
    debounce(search =>{
    console.log('search',search)
    getMovies({search})

  }, 300)
  ,[getMovies])

  //uso tipico de useRef
  //const inputRef = useRef() //valor que persiste entre renders


  const handelSubmit = (event)=>{
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) =>{
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleSort = () =>{
    setSort(!sort)
  }


  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handelSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Star Wars, Avengers...'></input>
          <input type='checkbox' onChange={handleSort} checked={sort}/>
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color:'red' }}> {error} </p>}
        </header>

        <main>
          {
            loading? <p>Cargando...</p> : <Movies movies={movies}/>
          }
        </main>
    </div>
  )
}

export default App
