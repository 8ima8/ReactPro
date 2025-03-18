import {createContext, useState} from 'react';
import React from 'react';

//1. crear el contexto && Este es el que se consume
export const FiltersContext = createContext()

//2. Crear el provider, para proveer el contexto
export function FiltersProvider ({children}){
    const [filters, setFilters] = useState({
        category:'all',
        minPrice:0
    })

    return(
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}