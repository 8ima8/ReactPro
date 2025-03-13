import { useRef } from 'react'
import {useState} from 'react'
import { useMemo } from 'react'
import { useCallback } from 'react'
import { searchMovies } from '../services/movies'
import debounce from 'just-debounce-it'
export function useMovies ({search,sort}){
    const [movies, setMovies] = useState([])
    const [loading, setLoading]= useState(false)
    const [error, setError]= useState(null)
    const previousSearch= useRef(search)


    const getMovies = useCallback(async () =>{
        if (search === previousSearch.current) return
        try {
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newMovies = await searchMovies({search})
            setMovies(newMovies)
        } catch (e) {
            setError(e.message)
        } finally{
            //se ejecunta tanto en el try como en el catch
            setLoading(false)
        }       
    
},[search])

    // const getSortedMovies = ()=>{
    //     const sortedMovies = sort
    //     ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
    //     : movies

    //     return sortedMovies
    // }
    const sortedMovies = useMemo(()=>{
        console.log('memoSortedMovies')

        return sort
        ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
        : movies

    },[sort,movies])

    

    return{ movies: sortedMovies, getMovies, loading}
}